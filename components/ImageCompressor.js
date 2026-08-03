"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";

const MAX_FILES = 10;

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );

  const value = bytes / 1024 ** index;

  return `${value.toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function createItem(file) {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
    file,
    previewUrl: URL.createObjectURL(file),
    status: "ready",
    compressedBlob: null,
    downloadUrl: "",
    compressedBytes: 0,
    compressedSize: "",
    errorMessage: "",
  };
}

function getCompressedName(fileName, extension) {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
  return `${nameWithoutExtension}-compressed.${extension}`;
}

export default function ImageCompressor() {
  const inputRef = useRef(null);
  const itemsRef = useRef([]);

  const [items, setItems] = useState([]);
  const [quality, setQuality] = useState(75);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isCreatingZip, setIsCreatingZip] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [error, setError] = useState("");

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

  const compressedItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.status === "done" &&
          item.downloadUrl &&
          item.compressedBlob
      ),
    [items]
  );

  const isBusy = isCompressing || isCreatingZip;

  function addFiles(selectedFiles) {
    setError("");

    const incomingFiles = Array.from(selectedFiles || []);

    if (incomingFiles.length === 0) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    const validFiles = incomingFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (validFiles.length !== incomingFiles.length) {
      setError(
        "Some files were skipped. Please upload JPG, PNG or WEBP images only."
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

    setItems((currentItems) => [
      ...currentItems,
      ...filesToAdd.map(createItem),
    ]);

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

  function compressSingleImage(item) {
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

        const outputFormat =
          item.file.type === "image/png" ? "image/webp" : item.file.type;

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
                errorMessage: "This image could not be compressed.",
              });

              return;
            }

            const extension =
              outputFormat === "image/webp"
                ? "webp"
                : outputFormat === "image/jpeg"
                  ? "jpg"
                  : "png";

            resolve({
              id: item.id,
              status: "done",
              outputExtension: extension,
              compressedBlob: blob,
              downloadUrl: URL.createObjectURL(blob),
              compressedBytes: blob.size,
              compressedSize: formatFileSize(blob.size),
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

  async function compressAllImages() {
    if (items.length === 0) {
      setError("Please upload at least one image.");
      return;
    }

    setError("");
    setIsCompressing(true);
    setCompletedCount(0);

    items.forEach((item) => {
      if (item.downloadUrl) {
        URL.revokeObjectURL(item.downloadUrl);
      }
    });

    setItems((currentItems) =>
      currentItems.map((item) => ({
        ...item,
        status: "compressing",
        compressedBlob: null,
        downloadUrl: "",
        compressedBytes: 0,
        compressedSize: "",
        errorMessage: "",
      }))
    );

    for (const item of items) {
      const result = await compressSingleImage(item);

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

    setIsCompressing(false);
  }

  async function downloadAllImages() {
    if (compressedItems.length === 0) {
      setError("Please compress your images first.");
      return;
    }

    try {
      setError("");
      setIsCreatingZip(true);

      const zip = new JSZip();

      compressedItems.forEach((item) => {
        zip.file(
          getCompressedName(item.file.name, item.outputExtension),
          item.compressedBlob
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
      link.download = "compressed-images.zip";

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        URL.revokeObjectURL(zipUrl);
      }, 1000);
    } catch (zipError) {
      console.error(zipError);
      setError("The ZIP file could not be created. Please try again.");
    } finally {
      setIsCreatingZip(false);
    }
  }

  function resetResults() {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.downloadUrl) {
          URL.revokeObjectURL(item.downloadUrl);
        }

        return {
          ...item,
          status: "ready",
          compressedBlob: null,
          downloadUrl: "",
          compressedBytes: 0,
          compressedSize: "",
          errorMessage: "",
        };
      })
    );

    setCompletedCount(0);
  }

  function changeQuality(nextQuality) {
    setQuality(nextQuality);
    resetResults();
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
    setQuality(75);
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

  const compressedTotalBytes = compressedItems.reduce(
    (total, item) => total + item.compressedBytes,
    0
  );

  const savedBytes = Math.max(
    0,
    originalTotalBytes - compressedTotalBytes
  );

  const savedPercentage =
    originalTotalBytes > 0 && compressedItems.length > 0
      ? Math.max(
          0,
          Math.round((savedBytes / originalTotalBytes) * 100)
        )
      : 0;

  const progress =
    items.length > 0
      ? Math.round((completedCount / items.length) * 100)
      : 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-8">
      <div
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          addFiles(event.dataTransfer.files);
        }}
        className={`rounded-3xl border-2 border-dashed p-8 text-center transition ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-slate-50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          multiple
          hidden
          onChange={(event) => addFiles(event.target.files)}
        />

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
          ↧
        </div>

        <h2 className="mt-5 text-2xl font-black">
          Upload images to compress
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          Drag and drop up to 10 JPG, PNG or WEBP images here, or choose
          files from your device.
        </p>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isBusy}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          Choose Images
        </button>
      </div>

      {items.length > 0 && (
        <section className="mt-7">
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
            {items.map((item) => {
              const savedForItem = Math.max(
                0,
                item.file.size - item.compressedBytes
              );

              const itemSavedPercentage =
                item.file.size > 0 && item.status === "done"
                  ? Math.max(
                      0,
                      Math.round(
                        (savedForItem / item.file.size) * 100
                      )
                    )
                  : 0;

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.previewUrl}
                      alt={`Preview of ${item.file.name}`}
                      className="h-full w-full object-contain p-4"
                    />

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={isBusy}
                      aria-label={`Remove ${item.file.name}`}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-xl font-bold text-slate-500 shadow transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-5">
                    <p
                      className="truncate font-black"
                      title={item.file.name}
                    >
                      {item.file.name}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Original
                        </p>
                        <p className="mt-1 font-black">
                          {formatFileSize(item.file.size)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Compressed
                        </p>
                        <p className="mt-1 font-black">
                          {item.status === "done"
                            ? item.compressedSize
                            : "—"}
                        </p>
                      </div>
                    </div>

                    {item.status === "compressing" && (
                      <p className="mt-4 text-sm font-bold text-blue-600">
                        Compressing...
                      </p>
                    )}

                    {item.status === "done" && (
                      <p className="mt-4 text-sm font-bold text-emerald-700">
                        Saved {itemSavedPercentage}%
                      </p>
                    )}

                    {item.status === "error" && (
                      <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                        {item.errorMessage}
                      </p>
                    )}

                    {item.downloadUrl && (
                      <a
                        href={item.downloadUrl}
                        download={getCompressedName(
                          item.file.name,
                          item.outputExtension
                        )}
                        className="mt-4 block rounded-xl bg-emerald-600 px-4 py-3 text-center font-black text-white transition hover:bg-emerald-700"
                      >
                        Download Compressed Image
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-7">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="compress-quality" className="font-bold">
            Compression quality
          </label>

          <span className="text-sm font-black text-blue-600">
            {quality}%
          </span>
        </div>

        <input
          id="compress-quality"
          type="range"
          min="20"
          max="95"
          value={quality}
          disabled={isBusy}
          onChange={(event) =>
            changeQuality(Number(event.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Lower quality usually creates a smaller file. PNG files are
          compressed to WEBP for better size reduction.
        </p>
      </section>

      {isCompressing && (
        <section className="mt-6 rounded-2xl bg-blue-50 p-5">
          <div className="flex items-center justify-between">
            <p className="font-bold text-blue-900">
              Compressing images
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
        onClick={compressAllImages}
        disabled={isBusy || items.length === 0}
        className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isCompressing
          ? `Compressing ${items.length} images...`
          : `Compress ${items.length || ""} ${
              items.length === 1 ? "Image" : "Images"
            }`}
      </button>

      {compressedItems.length > 0 && !isCompressing && (
        <section className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-lg font-black text-emerald-900">
            {compressedItems.length}{" "}
            {compressedItems.length === 1 ? "image" : "images"} compressed
            successfully
          </p>

          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Original size</p>
              <p className="mt-1 font-black">
                {formatFileSize(originalTotalBytes)}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Compressed size</p>
              <p className="mt-1 font-black">
                {formatFileSize(compressedTotalBytes)}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Space saved</p>
              <p className="mt-1 font-black text-emerald-700">
                {formatFileSize(savedBytes)}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3">
              <p className="text-slate-500">Reduction</p>
              <p className="mt-1 font-black text-emerald-700">
                {savedPercentage}%
              </p>
            </div>
          </div>

          {compressedItems.length > 1 && (
            <button
              type="button"
              onClick={downloadAllImages}
              disabled={isBusy}
              className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
            >
              {isCreatingZip
                ? "Creating ZIP file..."
                : `Download All ${compressedItems.length} Images as ZIP`}
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