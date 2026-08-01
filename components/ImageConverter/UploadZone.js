"use client";

import { MAX_FILES } from "./utils";

export default function UploadZone({
  inputRef,
  acceptedTypes,
  uploadLabel,
  isDragging,
  setIsDragging,
  onFilesSelected,
}) {
  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    onFilesSelected(event.dataTransfer.files);
  }

  function openFilePicker() {
    inputRef.current?.click();
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openFilePicker}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          openFilePicker();
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
        onChange={(event) => onFilesSelected(event.target.files)}
        className="hidden"
      />

      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl font-black text-blue-700">
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
  );
}