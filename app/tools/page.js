import Link from "next/link";

import ToolsSearch from "@/components/ToolsSearch";


export const metadata = {
  title: "Free Online Image Converter Tools",
  description:
    "Convert JPG, PNG, WEBP and AVIF images online for free. Batch convert up to 10 images and download files individually or together as a ZIP.",
};

const tools = [
  {
    title: "PNG to JPG",
    description:
      "Convert PNG images to widely supported JPG files with adjustable quality.",
    href: "/png-to-jpg",
    source: "PNG",
    target: "JPG",
  },
  {
    title: "JPG to PNG",
    description:
      "Convert JPG images to lossless PNG files with batch conversion support.",
    href: "/jpg-to-png",
    source: "JPG",
    target: "PNG",
  },
  {
    title: "JPG to WEBP",
    description:
      "Create smaller WEBP images from JPG files with adjustable output quality.",
    href: "/jpg-to-webp",
    source: "JPG",
    target: "WEBP",
  },
  {
    title: "WEBP to JPG",
    description:
      "Convert WEBP images to widely supported JPG files directly in your browser.",
    href: "/webp-to-jpg",
    source: "WEBP",
    target: "JPG",
  },
  {
    title: "PNG to WEBP",
    description:
      "Convert PNG images to modern WEBP files while preserving transparency.",
    href: "/png-to-webp",
    source: "PNG",
    target: "WEBP",
  },
  {
    title: "WEBP to PNG",
    description:
      "Convert WEBP images to lossless PNG files with transparent background support.",
    href: "/webp-to-png",
    source: "WEBP",
    target: "PNG",
  },
  {
    title: "AVIF to JPG",
    description:
      "Convert AVIF images to compatible JPG files with adjustable output quality.",
    href: "/avif-to-jpg",
    source: "AVIF",
    target: "JPG",
  },
  {
    title: "AVIF to PNG",
    description:
      "Convert AVIF images to lossless PNG files while preserving transparency.",
    href: "/avif-to-png",
    source: "AVIF",
    target: "PNG",
  },
  {
    title: "AVIF to WEBP",
    description:
      "Convert AVIF images to modern WEBP files for broader compatibility.",
    href: "/avif-to-webp",
    source: "AVIF",
    target: "WEBP",
  },
  {
    title: "JPG to AVIF",
    description:
      "Convert JPG images to efficient AVIF files with adjustable quality.",
    href: "/jpg-to-avif",
    source: "JPG",
    target: "AVIF",
  },
  {
    title: "PNG to AVIF",
    description:
      "Convert PNG images to AVIF while preserving transparent backgrounds.",
    href: "/png-to-avif",
    source: "PNG",
    target: "AVIF",
  },
  {
    title: "WEBP to AVIF",
    description:
      "Convert WEBP images to efficient AVIF files directly in your browser.",
    href: "/webp-to-avif",
    source: "WEBP",
    target: "AVIF",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      

      <section className="px-5 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold text-blue-600">
            Free Browser-Based Image Tools
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Online Image Converter Tools
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Convert JPG, PNG, WEBP and AVIF images online. Upload up to 10
            images, convert them together and download each file separately or
            as one ZIP archive.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-blue-600">12</p>
              <p className="mt-2 font-bold">Conversion tools</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-blue-600">10</p>
              <p className="mt-2 font-bold">Images per batch</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-blue-600">100%</p>
              <p className="mt-2 font-bold">Browser-based</p>
            </div>
          </div>
        </div>
      </section>

      <section id="all-tools" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="font-bold text-blue-600">All converters</p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Choose an image conversion tool
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Every converter supports batch processing, individual downloads
              and a single ZIP download for the complete batch.
            </p>
          </div>

          <ToolsSearch tools={tools} />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
              1
            </div>

            <h2 className="mt-5 text-xl font-black">Batch Conversion</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Upload and convert up to 10 images in one batch instead of
              processing every file separately.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
              2
            </div>

            <h2 className="mt-5 text-xl font-black">Private Processing</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Your images are processed locally in your browser and are not
              uploaded to our server.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
              3
            </div>

            <h2 className="mt-5 text-xl font-black">Download All as ZIP</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Download converted files one by one or package the entire batch
              inside one convenient ZIP archive.
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Image converter frequently asked questions
          </h2>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Are these image converter tools free?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. You can use all available image converters without
                creating an account.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Which image formats are supported?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                The current tools support JPG, PNG, WEBP and AVIF image
                conversions.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                How many images can I convert at once?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Each converter currently supports up to 10 images in one batch.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Are my images stored online?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                No. Conversion happens inside your browser, so your files are
                not sent to our server.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Can I download every converted image together?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. When multiple files are converted, you can download the
                complete batch as a ZIP archive.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold text-blue-300">
              Need a quick conversion?
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Choose a tool and start converting
            </h2>
          </div>

          <Link
            href="/png-to-jpg"
            className="rounded-xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-100"
          >
            Try PNG to JPG
          </Link>
        </div>
      </section>

      
    </main>
  );
}