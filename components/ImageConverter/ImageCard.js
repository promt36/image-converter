"use client";

import { useEffect, useState } from "react";
import { formatFileSize, getDownloadName } from "./utils";

export default function ImageCard({
  item,
  outputExtension,
  isBusy,
  onRemove,
}) {
  const [dimensions, setDimensions] = useState("");

  useEffect(() => {
    if (!item.previewUrl) {
      return;
    }

    const image = new Image();

    image.onload = () => {
      setDimensions(`${image.naturalWidth} × ${image.naturalHeight}px`);
    };

    image.onerror = () => {
      setDimensions("");
    };

    image.src = item.previewUrl;
  }, [item.previewUrl]);

  const isDone = item.status === "done";
  const isConverting = item.status === "converting";
  const hasError = item.status === "error";

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition ${
        isDone
          ? "border-emerald-200"
          : hasError
            ? "border-red-200"
            : "border-slate-200"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={item.previewUrl}
          alt={`Preview of ${item.file.name}`}
          className="h-full w-full object-contain p-4"
        />

        <button
          type="button"
          onClick={() => onRemove(item.id)}
          disabled={isBusy}
          aria-label={`Remove ${item.file.name}`}
          title="Remove image"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-xl font-bold text-slate-500 shadow-md backdrop-blur transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ×
        </button>

        <div className="absolute bottom-3 left-3">
          {isConverting && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-black text-white shadow">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Converting
            </span>
          )}

          {isDone && (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-black text-white shadow">
              ✓ Ready
            </span>
          )}

          {hasError && (
            <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1.5 text-xs font-black text-white shadow">
              Conversion failed
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <p
          className="truncate text-base font-black text-slate-900"
          title={item.file.name}
        >
          {item.file.name}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Original size
            </p>

            <p className="mt-1 font-black text-slate-700">
              {formatFileSize(item.file.size)}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Dimensions
            </p>

            <p className="mt-1 truncate font-black text-slate-700">
              {dimensions || "Loading..."}
            </p>
          </div>
        </div>

        {isDone && (
          <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Converted size
            </p>

            <p className="mt-1 font-black text-emerald-800">
              {item.convertedSize}
            </p>
          </div>
        )}

        {hasError && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
            {item.errorMessage}
          </p>
        )}

        {item.downloadUrl && (
          <a
            href={item.downloadUrl}
            download={getDownloadName(item.file.name, outputExtension)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-center font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
          >
            Download {outputExtension.toUpperCase()}
          </a>
        )}
      </div>
    </article>
  );
}