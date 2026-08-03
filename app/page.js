import Link from "next/link";

export const metadata = {
  title: "ImageConvert – Free Online Image Converter",
  description:
    "Convert JPG, PNG, WEBP and AVIF images online for free. Batch convert up to 10 files privately inside your browser.",
};

const popularTools = [
  {
    title: "PNG to JPG",
    href: "/png-to-jpg",
    source: "PNG",
    target: "JPG",
    description: "Convert PNG images to compatible JPG files.",
  },
  {
    title: "JPG to PNG",
    href: "/jpg-to-png",
    source: "JPG",
    target: "PNG",
    description: "Convert JPG images to lossless PNG files.",
  },
  {
    title: "JPG to WEBP",
    href: "/jpg-to-webp",
    source: "JPG",
    target: "WEBP",
    description: "Create lightweight WEBP images from JPG files.",
  },
  {
    title: "WEBP to JPG",
    href: "/webp-to-jpg",
    source: "WEBP",
    target: "JPG",
    description: "Convert WEBP images to widely supported JPG files.",
  },
  {
    title: "PNG to AVIF",
    href: "/png-to-avif",
    source: "PNG",
    target: "AVIF",
    description: "Convert PNG images to efficient AVIF files.",
  },
  {
    title: "AVIF to JPG",
    href: "/avif-to-jpg",
    source: "AVIF",
    target: "JPG",
    description: "Convert AVIF images to easy-to-use JPG files.",
  },
];

const faqs = [
  {
    question: "Is ImageConvert free to use?",
    answer:
      "Yes. All current image conversion tools are free and do not require an account.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Supported image conversions happen locally inside your browser.",
  },
  {
    question: "How many images can I convert at once?",
    answer:
      "You can currently upload and convert up to 10 images in one batch.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. You can download images separately or save the complete batch as one ZIP file.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 px-5 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="absolute left-[-100px] top-[-120px] h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
              Fast, free and private image conversion
            </div>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Convert images online
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                in just a few seconds
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Convert JPG, PNG, WEBP and AVIF images directly in your browser.
              Process up to 10 files together and download the results
              individually or as one ZIP archive.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/tools"
                className="rounded-2xl bg-blue-600 px-8 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Explore All Tools
              </Link>

              <Link
                href="/png-to-jpg"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg"
              >
                Try PNG to JPG
              </Link>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
                <p className="text-4xl font-black text-blue-600">12</p>
                <p className="mt-2 font-bold text-slate-700">
                  Conversion tools
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
                <p className="text-4xl font-black text-blue-600">10</p>
                <p className="mt-2 font-bold text-slate-700">
                  Images per batch
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
                <p className="text-4xl font-black text-blue-600">100%</p>
                <p className="mt-2 font-bold text-slate-700">
                  Browser processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-black text-blue-600">Popular converters</p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Choose a tool and start converting
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Select one of the most frequently used image conversion tools.
              </p>
            </div>

            <Link
              href="/tools"
              className="font-black text-blue-600 transition hover:text-blue-800"
            >
              View all 12 tools →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm font-black text-blue-700">
                    {tool.source}
                  </span>

                  <span className="text-xl font-black text-slate-400 transition group-hover:translate-x-1">
                    →
                  </span>

                  <span className="rounded-xl bg-slate-950 px-3 py-2 text-sm font-black text-white">
                    {tool.target}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black transition group-hover:text-blue-600">
                  {tool.title} Converter
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {tool.description}
                </p>

                <p className="mt-7 font-black text-blue-600">
                  Open converter →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-black text-blue-600">Why ImageConvert?</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Built for speed, privacy and simplicity
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-black text-blue-700">
                01
              </div>

              <h3 className="mt-6 text-2xl font-black">Batch conversion</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Convert up to 10 images together instead of processing every
                file separately.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-black text-blue-700">
                02
              </div>

              <h3 className="mt-6 text-2xl font-black">Private processing</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Your files stay inside your browser during supported image
                conversions.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-black text-blue-700">
                03
              </div>

              <h3 className="mt-6 text-2xl font-black">Download as ZIP</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Download each file separately or save the complete converted
                batch inside one ZIP archive.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-14 text-center text-white shadow-2xl md:px-12">
          <p className="font-bold text-blue-100">
            Start converting without registration
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black md:text-5xl">
            All the image conversion tools you need in one place
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Browse all JPG, PNG, WEBP and AVIF conversion tools and process your
            images directly in the browser.
          </p>

          <Link
            href="/tools"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-black text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Browse Image Tools
          </Link>
        </div>
      </section>

      <section id="faq" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-black text-blue-600">Questions and answers</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition open:border-blue-300 open:bg-white open:shadow-lg"
              >
                <summary className="cursor-pointer font-black">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}