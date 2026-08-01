import Link from "next/link";
import ImageConverter from "@/components/ImageConverter/ImageConverter";

export const metadata = {
  title: "JPG to PNG Converter – Convert JPG Images Online Free",
  description:
    "Convert JPG images to PNG online for free. Upload up to 10 images, convert them in your browser and download them individually or as a ZIP file.",
};

const faqs = [
  {
    question: "How do I convert JPG to PNG?",
    answer:
      "Upload one or more JPG images, adjust the output quality if needed, click Convert to PNG and download the converted files.",
  },
  {
    question: "Can I convert several JPG images at once?",
    answer:
      "Yes. You can upload and convert up to 10 JPG images in one batch.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. After conversion, you can download every PNG image together in one ZIP file.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Your images are processed locally inside your browser.",
  },
];

export default function JpgToPngPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            ImageConvert
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link href="/">Home</Link>
            <a href="#how-to-convert">How It Works</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-blue-600">
            Free Online Image Tool
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            JPG to PNG Converter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Convert up to 10 JPG images to PNG at once. Download each image
            separately or save all converted files together as a ZIP.
          </p>

          <div className="mt-12 text-left">
            <ImageConverter
              acceptedTypes="image/jpeg"
              outputFormat="image/png"
              outputExtension="png"
              uploadLabel="Upload JPG images"
            />
          </div>
        </div>
      </section>

      <section
        id="how-to-convert"
        className="border-y border-slate-200 bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black">
            How to convert JPG to PNG
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">1</p>
              <h3 className="mt-3 text-xl font-black">Upload JPG images</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose up to 10 JPG images from your device or drag them into
                the upload area.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">2</p>
              <h3 className="mt-3 text-xl font-black">Convert to PNG</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Click the conversion button and wait for the batch to finish.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">3</p>
              <h3 className="mt-3 text-xl font-black">Download your files</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Download each PNG separately or download all images as a ZIP.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Why convert JPG images to PNG?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              PNG is a lossless image format that is useful for screenshots,
              graphics, illustrations and images that need clear edges.
            </p>

            <p>
              Converting JPG to PNG can be useful when a website, application
              or design project requires the PNG format.
            </p>

            <p>
              Converting JPG to PNG does not restore image details that were
              previously removed by JPG compression, but it gives you a PNG
              version that can be edited and reused.
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-slate-200 bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black">
            JPG to PNG frequently asked questions
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 p-5"
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

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 ImageConvert. Free online image conversion tools.
      </footer>
    </main>
  );
}