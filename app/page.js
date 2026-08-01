"use client";

import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [format, setFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(90);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [convertedSize, setConvertedSize] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  function selectFile(selectedFile) {
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const previewUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreview(previewUrl);
    setDownloadUrl("");
    setConvertedSize("");
  }

  function handleFileChange(event) {
    selectFile(event.target.files?.[0]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files?.[0]);
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function getExtension() {
    if (format === "image/jpeg") return "jpg";
    if (format === "image/webp") return "webp";
    return "png";
  }

  async function convertImage() {
    if (!file) {
      alert("Please upload an image first.");
      return;
    }

    setIsConverting(true);
    setDownloadUrl("");
    setConvertedSize("");

    const originalUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      if (!context) {
        alert("Your browser could not process this image.");
        setIsConverting(false);
        URL.revokeObjectURL(originalUrl);
        return;
      }

      if (format === "image/jpeg") {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      context.drawImage(image, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            alert("The image could not be converted.");
            setIsConverting(false);
            URL.revokeObjectURL(originalUrl);
            return;
          }

          const convertedUrl = URL.createObjectURL(blob);

          setDownloadUrl(convertedUrl);
          setConvertedSize(formatFileSize(blob.size));
          setIsConverting(false);
          URL.revokeObjectURL(originalUrl);
        },
        format,
        quality / 100
      );
    };

    image.onerror = () => {
      alert("This image format could not be opened.");
      setIsConverting(false);
      URL.revokeObjectURL(originalUrl);
    };

    image.src = originalUrl;
  }

  function resetConverter() {
    if (preview) URL.revokeObjectURL(preview);
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);

    setFile(null);
    setPreview("");
    setDownloadUrl("");
    setConvertedSize("");
    setFormat("image/jpeg");
    setQuality(90);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            ImageConvert
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#converter" className="hover:text-blue-600">
              Converter
            </a>
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-600">
              How It Works
            </a>
          </nav>
        </div>
      </header>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold text-blue-600">
            Free Online Image Converter
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Convert JPG, PNG and WEBP images in seconds
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Upload an image, choose your output format and download the new
            file. Your image stays inside your browser.
          </p>

          <div
            id="converter"
            className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-8"
          >
            <div
              onDragEnter={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 transition md:p-12 ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {preview ? (
                <div className="flex flex-col items-center">
                  <img
                    src={preview}
                    alt="Selected image preview"
                    className="max-h-72 max-w-full rounded-xl object-contain shadow"
                  />

                  <p className="mt-5 font-bold">{file?.name}</p>

                  <p className="mt-1 text-sm text-slate-500">
                    {file ? formatFileSize(file.size) : ""}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-blue-600">
                    Click or drop another image to replace it
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                    ↑
                  </div>

                  <p className="mt-5 text-xl font-bold">
                    Drop your image here
                  </p>

                  <p className="mt-2 text-slate-500">
                    or click to choose a file
                  </p>

                  <p className="mt-4 text-sm text-slate-400">
                    JPG, PNG and WEBP supported
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-5 text-left md:grid-cols-2">
              <div>
                <label className="mb-2 block font-bold">
                  Convert image to
                </label>

                <select
                  value={format}
                  onChange={(event) => {
                    setFormat(event.target.value);
                    setDownloadUrl("");
                    setConvertedSize("");
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="image/jpeg">JPG</option>
                  <option value="image/png">PNG</option>
                  <option value="image/webp">WEBP</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="font-bold">Quality</label>
                  <span className="text-sm font-bold text-blue-600">
                    {quality}%
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(event) => {
                    setQuality(Number(event.target.value));
                    setDownloadUrl("");
                    setConvertedSize("");
                  }}
                  className="w-full"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Quality mainly affects JPG and WEBP files.
                </p>
              </div>
            </div>

            <button
              onClick={convertImage}
              disabled={isConverting}
              className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {isConverting ? "Converting..." : "Convert Image"}
            </button>

            {downloadUrl && (
              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-bold text-emerald-800">
                  Your image is ready
                </p>

                <p className="mt-1 text-sm text-emerald-700">
                  Converted file size: {convertedSize}
                </p>

                <a
                  href={downloadUrl}
                  download={`converted-image.${getExtension()}`}
                  className="mt-4 block rounded-xl bg-emerald-600 px-6 py-4 font-black text-white transition hover:bg-emerald-700"
                >
                  Download Converted Image
                </a>
              </div>
            )}

            {file && (
              <button
                onClick={resetConverter}
                className="mt-4 text-sm font-bold text-slate-500 hover:text-slate-900"
              >
                Remove image and start again
              </button>
            )}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-3"
      >
        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-black">Fast Conversion</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Convert common image formats quickly without waiting for a server
            upload.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-black">Private and Secure</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Images are processed locally in your browser and are not uploaded
            to our server.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-black">Free to Use</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Convert JPG, PNG and WEBP files without creating an account.
          </p>
        </article>
      </section>

      <section
        id="how-it-works"
        className="border-t border-slate-200 bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black">How it works</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-blue-600">1</p>
              <h3 className="mt-3 font-black">Upload</h3>
              <p className="mt-2 text-slate-600">
                Choose or drag an image into the converter.
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-blue-600">2</p>
              <h3 className="mt-3 font-black">Convert</h3>
              <p className="mt-2 text-slate-600">
                Select JPG, PNG or WEBP and choose the quality.
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-blue-600">3</p>
              <h3 className="mt-3 font-black">Download</h3>
              <p className="mt-2 text-slate-600">
                Save the converted image directly to your computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 ImageConvert. Free online image conversion tools.
      </footer>
    </main>
  );
}