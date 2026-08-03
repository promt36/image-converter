import Link from "next/link";
import ToolsSearch from "@/components/ToolsSearch";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Free Online Image Tools",
  description:
    "Convert and compress JPG, PNG, WEBP and AVIF images online for free. Process up to 10 images and download files individually or as a ZIP.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="px-5 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold text-blue-600">
            Free Browser-Based Image Tools
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Online Image Tools
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Convert and compress JPG, PNG, WEBP and AVIF images online. Process
            up to 10 images and download each file separately or together as a
            ZIP archive.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-blue-600">
                {tools.length}
              </p>

              <p className="mt-2 font-bold">Available tools</p>
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
            <p className="font-bold text-blue-600">All tools</p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Choose an image tool
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Search for an image converter or compression tool. Every tool
              processes your files directly inside your browser.
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

            <h2 className="mt-5 text-xl font-black">Batch Processing</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Upload and process up to 10 images in one batch instead of
              handling every file separately.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
              2
            </div>

            <h2 className="mt-5 text-xl font-black">Private Processing</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Your images are processed locally in your browser and are not
              intentionally uploaded to our server.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
              3
            </div>

            <h2 className="mt-5 text-xl font-black">Download as ZIP</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Download processed files individually or package the complete
              batch inside one convenient ZIP archive.
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Image tools frequently asked questions
          </h2>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Are these image tools free?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. You can use all available image tools without creating an
                account.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Which image formats are supported?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                The current tools support JPG, PNG, WEBP and AVIF image formats.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Can I compress images?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. The Compress Image tool reduces JPG, PNG and WEBP file
                sizes directly inside your browser.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                How many images can I process at once?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Each tool currently supports up to 10 images in one batch.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-black">
                Are my images stored online?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                No. Supported processing happens inside your browser, so your
                files are not intentionally sent to our server.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold text-blue-300">
              Need smaller image files?
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Compress your images online
            </h2>
          </div>

          <Link
            href="/compress-image"
            className="rounded-xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-100"
          >
            Open Image Compressor
          </Link>
        </div>
      </section>
    </main>
  );
}