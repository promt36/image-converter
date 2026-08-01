"use client";

import { useEffect, useRef, useState } from "react";
import JSZip from "jszip";

const MAX_FILES = 10;

export default function ImageConverter({
  acceptedTypes = "image/png",
  outputFormat = "image/jpeg",
  outputExtension = "jpg",
  uploadLabel = "Upload your images",
}) {
  const inputRef = useRef(null);

  const [items, setItems] = useState([]);
  const [quality, setQuality] = useState(90);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      items.forEach((item) => {
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
        if (item.downloadUrl) URL.revokeObjectURL(item.downloadUrl);
      });
    };
  }, [items]);

  function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function getAllowedTypes() {
    return acceptedTypes
      .split(",")
      .map((type) => type.trim())
      .filter(Boolean);
  }

  function addFiles(selectedFiles) {
    setError("");

    const incomingFiles = Array.from(selectedFiles || []);

    if (incomingFiles.length === 0) return;

    const allowedTypes = getAllowedTypes();

    const validFiles = incomingFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (validFiles.length !== incomingFiles.length) {
      setError("Some files were skipped because their format is not supported.");
    }

    const availableSpaces = MAX_FILES - items.length;

    if (availableSpaces <= 0) {
      setError(`You can upload a maximum of ${MAX_FILES} images.`);
      return;
    }

    const filesToAdd = validFiles.slice(0, availableSpaces);

    if (validFiles.length > availableSpaces) {
      setError(`Only ${MAX_FILES} images can be uploaded at one time.`);
    }

    const newItems = filesToAdd.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
      file,
      previewUrl: URL.createObjectURL(file),
      downloadUrl: "",
      convertedSize: "",
      status: "ready",
    }));

    setItems((currentItems) => [...currentItems, ...newItems]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleFileChange(event) {
    addFiles(event.target.files);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  function removeItem(id) {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find((item) => item.id === id);

      if (itemToRemove?.previewUrl) {
        URL.revokeObjectURL(itemToRemove.previewUrl);
      }

      if (itemToRemove?.downloadUrl) {
        URL.revokeObjectURL(itemToRemove.downloadUrl);
      }

      return currentItems.filter((item) => item.id !== id);
    });
  }

  function convertSingleImage(item) {
    return new Promise((resolve) => {
      const sourceUrl = URL.createObjectURL(item.file);
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        if (!context) {
          URL.revokeObjectURL(sourceUrl);

          resolve({
            id: item.id,
            status: "error",
            errorMessage: "Your browser could not process this image.",
          });

          return;
        }

        if (outputFormat === "image/jpeg") {
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, canvas.width, canvas.height);
        }

        context.drawImage(image, 0, 0);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(sourceUrl);

            if (!blob) {
              resolve({
                id: item.id,
                status: "error",
                errorMessage: "This image could not be converted.",
              });

              return;
            }

            resolve({
              id: item.id,
              status: "done",
              downloadUrl: URL.createObjectURL(blob),
              convertedSize: formatFileSize(blob.size),
            });
          },
          outputFormat,
          quality / 100
        );
      };

      image.onerror = () => {
        URL.revokeObjectURL(sourceUrl);

        resolve({
          id: item.id,
          status: "error",
          errorMessage: "This image could not be opened.",
        });
      };

      image.src = sourceUrl;
    });
  }

  async function convertAllImages() {
    if (items.length === 0) {
      setError("Please upload at least one image.");
      return;
    }

    setError("");
    setIsConverting(true);

    items.forEach((item) => {
      if (item.downloadUrl) {
        URL.revokeObjectURL(item.downloadUrl);
      }
    });

    setItems((currentItems) =>
      currentItems.map((item) => ({
        ...item,
        downloadUrl: "",
        convertedSize: "",
        status: "converting",
        errorMessage: "",
      }))
    );

    const results = await Promise.all(items.map(convertSingleImage));

    setItems((currentItems) =>
      currentItems.map((item) => {
        const result = results.find((entry) => entry.id === item.id);

        if (!result) return item;

        return {
          ...item,
          ...result,
        };
      })
    );

    setIsConverting(false);
  }

  function resetAll() {
    items.forEach((item) => {
      if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
      if (item.downloadUrl) URL.revokeObjectURL(item.downloadUrl);
    });

    setItems([]);
    setQuality(90);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function getDownloadName(fileName) {
    const nameWithoutExtension =
      fileName.lastIndexOf(".") > 0
        ? fileName.substring(0, fileName.lastIndexOf("."))
        : fileName;

    return `${nameWithoutExtension}.${outputExtension}`;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-8">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            inputRef.current?.click();
          }
        }}
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition md:p-12 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={acceptedTypes}
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-700">
            ↑
          </div>

          <p className="mt-5 text-xl font-bold">{uploadLabel}</p>

          <p className="mt-2 text-slate-500">
            Drag and drop images here, or click to browse
          </p>

          <p className="mt-3 text-sm font-semibold text-blue-600">
            Maximum {MAX_FILES} images
          </p>
        </div>
      </div>

      {items.length > 0 && (
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-black">
              Selected images ({items.length}/{MAX_FILES})
            </h2>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={items.length >= MAX_FILES}
              className="text-sm font-bold text-blue-600 hover:text-blue-800 disabled:cursor-not-allowed disabled:text-slate-400"
            >
              Add more images
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.previewUrl}
                    alt={item.file.name}
                    className="h-20 w-20 rounded-xl bg-slate-100 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold" title={item.file.name}>
                      {item.file.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formatFileSize(item.file.size)}
                    </p>

                    {item.status === "converting" && (
                      <p className="mt-2 text-sm font-semibold text-blue-600">
                        Converting...
                      </p>
                    )}

                    {item.status === "done" && (
                      <p className="mt-2 text-sm font-semibold text-emerald-700">
                        Ready · {item.convertedSize}
                      </p>
                    )}

                    {item.status === "error" && (
                      <p className="mt-2 text-sm font-semibold text-red-600">
                        {item.errorMessage}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    disabled={isConverting}
                    className="h-8 w-8 rounded-full bg-slate-100 font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed"
                    aria-label={`Remove ${item.file.name}`}
                  >
                    ×
                  </button>
                </div>

                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    download={getDownloadName(item.file.name)}
                    className="mt-4 block rounded-xl bg-emerald-600 px-4 py-3 text-center font-black text-white transition hover:bg-emerald-700"
                  >
                    Download {outputExtension.toUpperCase()}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="quality" className="font-bold">
            Output quality
          </label>

          <span className="text-sm font-bold text-blue-600">
            {quality}%
          </span>
        </div>

        <input
          id="quality"
          type="range"
          min="10"
          max="100"
          value={quality}
          disabled={isConverting}
          onChange={(event) => {
            setQuality(Number(event.target.value));

            setItems((currentItems) =>
              currentItems.map((item) => {
                if (item.downloadUrl) {
                  URL.revokeObjectURL(item.downloadUrl);
                }

                return {
                  ...item,
                  downloadUrl: "",
                  convertedSize: "",
                  status: "ready",
                };
              })
            );
          }}
          className="w-full"
        />

        <p className="mt-2 text-xs text-slate-500">
          The selected quality will be applied to all images.
        </p>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={convertAllImages}
        disabled={isConverting || items.length === 0}
        className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isConverting
          ? `Converting ${items.length} images...`
          : `Convert ${items.length || ""} ${
              items.length === 1 ? "Image" : "Images"
            } to ${outputExtension.toUpperCase()}`}
      </button>

      {items.length > 0 && (
        <button
          type="button"
          onClick={resetAll}
          disabled={isConverting}
          className="mt-4 text-sm font-bold text-slate-500 hover:text-slate-900 disabled:cursor-not-allowed"
        >
          Remove all images
        </button>
      )}
    </div>
  );
}