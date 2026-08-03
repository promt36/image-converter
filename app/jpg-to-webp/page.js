import Link from "next/link";
import ImageConverter from "@/components/ImageConverter/ImageConverter";

export const metadata = {
  title: "JPG to WEBP Converter – Convert JPG Images Online Free",
  description:
    "Convert up to 10 JPG images to WEBP online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert JPG to WEBP?",
    answer:
      "Upload one or more JPG images, choose the output quality, click Convert to WEBP and download the converted files.",
  },
  {
    question: "Can I convert multiple JPG files at once?",
    answer:
      "Yes. You can convert up to 10 JPG images in one batch.",
  },
  {
    question: "Can I download all WEBP images together?",
    answer:
      "Yes. After conversion, use the Download All button to save the converted images inside one ZIP file.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Your images are converted locally inside your browser.",
  },
  {
    question: "Why should I convert JPG to WEBP?",
    answer:
      "WEBP can provide smaller file sizes while maintaining good image quality, which can help websites load faster.",
  },
];

export default function JpgToWebpPage() {
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
            JPG to WEBP Converter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Convert up to 10 JPG images to WEBP at once. Adjust the image
            quality and download your converted files separately or as a ZIP.
          </p>

          <div className="mt-12 text-left">
            <ImageConverter
              acceptedTypes="image/jpeg"
              outputFormat="image/webp"
              outputExtension="webp"
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
            How to convert JPG to WEBP
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">1</p>
              <h3 className="mt-3 text-xl font-black">Upload JPG images</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Select up to 10 JPG images or drag them into the upload area.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">2</p>
              <h3 className="mt-3 text-xl font-black">Choose the quality</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Adjust the quality slider to balance clarity and file size.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">3</p>
              <h3 className="mt-3 text-xl font-black">Download WEBP files</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Download files individually or save the complete batch as ZIP.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Why convert JPG images to WEBP?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              WEBP is a modern image format designed to provide good image
              quality with smaller file sizes.
            </p>

            <p>
              Smaller images can help websites load more quickly and reduce the
              amount of data visitors need to download.
            </p>

            <p>
              The quality control lets you choose between maximum image detail
              and a smaller output file.
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
            JPG to WEBP frequently asked questions
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