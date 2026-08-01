"use client";

import { formatFileSize, getDownloadName } from "./utils";

export default function ImageCard({
  item,
  outputExtension,
  isBusy,
  onRemove,
}) {
  return (
    <article className="rounded-2xl border border-slate-200 p-4">
      <div className="flex gap-4">
        <img
          src={item.previewUrl}
          alt={`Preview of ${item.file.name}`}
          className="h-20 w-20 rounded-xl bg-slate-100 object-contain"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate font-bold" title={item.file.name}>
            {item.file.name}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Original: {formatFileSize(item.file.size)}
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
          onClick={() => onRemove(item.id)}
          disabled={isBusy}
          aria-label={`Remove ${item.file.name}`}
          className="h-8 w-8 rounded-full bg-slate-100 font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed"
        >
          ×
        </button>
      </div>

      {item.downloadUrl && (
        <a
          href={item.downloadUrl}
          download={getDownloadName(item.file.name, outputExtension)}
          className="mt-4 block rounded-xl bg-emerald-600 px-4 py-3 text-center font-black text-white transition hover:bg-emerald-700"
        >
          Download {outputExtension.toUpperCase()}
        </a>
      )}
    </article>
  );
}