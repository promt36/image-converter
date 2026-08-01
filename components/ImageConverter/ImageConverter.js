"use client";

import { useEffect, useRef, useState } from "react";
import JSZip from "jszip";

import UploadZone from "./UploadZone";
import ImageCard from "./ImageCard";

import {
  MAX_FILES,
  createItem,
  formatFileSize,
  getDownloadName,
} from "./utils";

export default function ImageConverter({
  acceptedTypes = "image/png",
  outputFormat = "image/jpeg",
  outputExtension = "jpg",
  uploadLabel = "Upload your images",
}) {
  const inputRef = useRef(null);
  const itemsRef = useRef([]);

  const [items, setItems] = useState([]);
  const [quality, setQuality] = useState(90);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isCreatingZip, setIsCreatingZip] = useState(false);
  const [error, setError] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl);
        }

        if (item.downloadUrl) {
          URL.revokeObjectURL(item.downloadUrl);
        }
      });
    };
  }, []);

  const convertedItems = items.filter(
    (item) => item.status === "done" && item.downloadUrl
  );

  const isBusy = isConverting || isCreatingZip;

  function getAllowedTypes() {
    return acceptedTypes
      .split(",")
      .map((type) => type.trim())
      .filter(Boolean);
  }

  function addFiles(selectedFiles) {
    setError("");

    const incomingFiles = Array.from(selectedFiles || []);

    if (incomingFiles.length === 0) {
      return;
    }

    const allowedTypes = getAllowedTypes();

    const validFiles = incomingFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (validFiles.length !== incomingFiles.length) {
      setError(
        "Some files were skipped because their format is not supported."
      );
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

    const newItems = filesToAdd.map(createItem);

    setItems((currentItems) => [...currentItems, ...newItems]);
    setCompletedCount(0);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
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
              convertedBlob: blob,      
              convertedSize: formatFileSize(blob.size),
              convertedBytes: blob.size,
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
    setCompletedCount(0);

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
        convertedBytes: 0,
        status: "converting",
        errorMessage: "",
      }))
    );

    const results = [];

    for (const item of items) {
      const result = await convertSingleImage(item);

      results.push(result);

      setCompletedCount((count) => count + 1);

      setItems((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === result.id
            ? {
                ...currentItem,
                ...result,
              }
            : currentItem
        )
      );
    }

    setIsConverting(false);
  }

  async function downloadAllImages() {
    if (convertedItems.length === 0) {
      setError("Please convert your images first.");
      return;
    }

    try {
      setError("");
      setIsCreatingZip(true);

      const zip = new JSZip();

      convertedItems.forEach((item) => {
        if (!item.convertedBlob) {
          throw new Error(`Could not prepare ${item.file.name}`);
        }

        zip.file(
          getDownloadName(item.file.name, outputExtension),
          item.convertedBlob
        );
      });

      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: 6,
        },
      });

      const zipUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");

      link.href = zipUrl;
      link.download = `converted-${outputExtension}-images.zip`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        URL.revokeObjectURL(zipUrl);
      }, 1000);
    } catch (downloadError) {
      console.error(downloadError);

      setError(
        "The ZIP file could not be created. Please try again."
      );
    } finally {
      setIsCreatingZip(false);
    }
  }

  function resetConvertedResults() {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.downloadUrl) {
          URL.revokeObjectURL(item.downloadUrl);
        }

        return {
          ...item,
          downloadUrl: "",
          convertedSize: "",
          convertedBytes: 0,
          status: "ready",
          errorMessage: "",
        };
      })
    );

    setCompletedCount(0);
  }

  function changeQuality(newQuality) {
    setQuality(newQuality);
    resetConvertedResults();
  }

  function resetAll() {
    items.forEach((item) => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }

      if (item.downloadUrl) {
        URL.revokeObjectURL(item.downloadUrl);
      }
    });

    setItems([]);
    setQuality(90);
    setError("");
    setCompletedCount(0);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const originalTotalBytes = items.reduce(
    (total, item) => total + item.file.size,
    0
  );

  const convertedTotalBytes = convertedItems.reduce(
    (total, item) => total + item.convertedBytes,
    0
  );

  const savedBytes = Math.max(
    0,
    originalTotalBytes - convertedTotalBytes
  );

  const progress =
    items.length > 0
      ? Math.round((completedCount / items.length) * 100)
      : 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-8">
      <UploadZone
        inputRef={inputRef}
        acceptedTypes={acceptedTypes}
        uploadLabel={uploadLabel}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        onFilesSelected={addFiles}
      />

      {items.length > 0 && (
        <section className="mt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-black">
              Selected images ({items.length}/{MAX_FILES})
            </h2>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={items.length >= MAX_FILES || isBusy}
              className="text-sm font-bold text-blue-600 hover:text-blue-800 disabled:cursor-not-allowed disabled:text-slate-400"
            >
              Add more images
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <ImageCard
                key={item.id}
                item={item}
                outputExtension={outputExtension}
                isBusy={isBusy}
                onRemove={removeItem}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mt-6">
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
          disabled={isBusy}
          onChange={(event) =>
            changeQuality(Number(event.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-xs text-slate-500">
          The selected quality will be applied to all images.
        </p>
      </section>

      {isConverting && (
        <section className="mt-6 rounded-2xl bg-blue-50 p-5">
          <div className="flex items-center justify-between">
            <p className="font-bold text-blue-900">
              Converting images
            </p>

            <p className="text-sm font-bold text-blue-700">
              {completedCount}/{items.length}
            </p>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-blue-700">
            {progress}% complete
          </p>
        </section>
      )}

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
        disabled={isBusy || items.length === 0}
        className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isConverting
          ? `Converting ${items.length} images...`
          : `Convert ${items.length || ""} ${
              items.length === 1 ? "Image" : "Images"
            } to ${outputExtension.toUpperCase()}`}
      </button>

      {convertedItems.length > 0 && !isConverting && (
        <section className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-lg font-black text-emerald-900">
            {convertedItems.length}{" "}
            {convertedItems.length === 1 ? "image" : "images"} converted
            successfully
          </p>

          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Original size</p>
              <p className="mt-1 font-black">
                {formatFileSize(originalTotalBytes)}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Converted size</p>
              <p className="mt-1 font-black">
                {formatFileSize(convertedTotalBytes)}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Space saved</p>
              <p className="mt-1 font-black text-emerald-700">
                {formatFileSize(savedBytes)}
              </p>
            </div>
          </div>

          {convertedItems.length > 1 && (
            <button
              type="button"
              onClick={downloadAllImages}
              disabled={isBusy}
              className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
            >
              {isCreatingZip
                ? "Creating ZIP file..."
                : `Download All ${convertedItems.length} Images as ZIP`}
            </button>
          )}
        </section>
      )}

      {items.length > 0 && (
        <button
          type="button"
          onClick={resetAll}
          disabled={isBusy}
          className="mt-4 text-sm font-bold text-slate-500 hover:text-slate-900 disabled:cursor-not-allowed"
        >
          Remove all images
        </button>
      )}
    </div>
  );
}