import Link from "next/link";
import ImageConverter from "@/components/ImageConverter/ImageConverter";

export const metadata = {
  title: "PNG to JPG Converter – Convert PNG Images Online Free",
  description:
    "Convert PNG images to JPG online for free. Fast, private and easy browser-based PNG to JPG conversion with adjustable image quality.",
};

const faqs = [
  {
    question: "How do I convert PNG to JPG?",
    answer:
      "Upload your PNG file, choose the output quality, click Convert to JPG and download the converted image.",
  },
  {
    question: "Is this PNG to JPG converter free?",
    answer:
      "Yes. You can use this converter without creating an account or paying a fee.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. The conversion is performed locally inside your browser.",
  },
  {
    question: "What happens to transparent PNG areas?",
    answer:
      "JPG does not support transparency, so transparent areas are changed to a white background.",
  },
];

export default function PngToJpgPage() {
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
            PNG to JPG Converter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Convert PNG images to JPG online for free. Adjust the quality and
            download your converted image in seconds.
          </p>

          <div className="mt-12 text-left">
            <ImageConverter
              acceptedTypes="image/png"
              outputFormat="image/jpeg"
              outputExtension="jpg"
              uploadLabel="Upload a PNG image"
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
            How to convert PNG to JPG
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">1</p>
              <h3 className="mt-3 text-xl font-black">Upload your PNG</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose a PNG image from your device or drag it into the upload
                area.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">2</p>
              <h3 className="mt-3 text-xl font-black">Choose the quality</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Use the quality slider to balance image clarity and file size.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">3</p>
              <h3 className="mt-3 text-xl font-black">Download the JPG</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Convert the image and save the new JPG file to your device.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Why convert PNG images to JPG?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              PNG is useful for transparent graphics, logos and screenshots.
              JPG is often more suitable for photographs and situations where
              a smaller file size is important.
            </p>

            <p>
              Converting PNG to JPG can reduce the image file size, making it
              easier to share by email, upload to websites or store on your
              device.
            </p>

            <p>
              Because JPG does not support transparency, this converter adds a
              white background behind transparent parts of the PNG image.
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
            PNG to JPG frequently asked questions
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