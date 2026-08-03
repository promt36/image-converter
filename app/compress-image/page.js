import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
  title: "Compress Images Online Free",
  description:
    "Compress JPG, PNG and WEBP images online for free. Reduce file size, process up to 10 images at once and download compressed files individually or as a ZIP.",
};

const faqs = [
  {
    question: "How do I compress an image?",
    answer:
      "Upload one or more JPG, PNG or WEBP images, choose the compression quality and click Compress Images.",
  },
  {
    question: "Can I compress multiple images at once?",
    answer:
      "Yes. You can upload and compress up to 10 images in one batch.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. The compression happens locally inside your browser.",
  },
  {
    question: "Why are PNG files converted to WEBP?",
    answer:
      "WEBP usually creates much smaller files than PNG while keeping good visual quality.",
  },
];

export default function CompressImagePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-black text-blue-600">
            Free Online Image Compressor
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Compress Images Online
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Reduce the file size of JPG, PNG and WEBP images directly in your
            browser. Compress up to 10 images at once and download them
            individually or together as a ZIP file.
          </p>

          <div className="mt-12 text-left">
            <ImageCompressor />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black">
            How to compress images online
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-3xl font-black text-blue-600">1</p>
              <h3 className="mt-4 text-xl font-black">
                Upload your images
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose up to 10 JPG, PNG or WEBP images from your device.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-3xl font-black text-blue-600">2</p>
              <h3 className="mt-4 text-xl font-black">
                Choose compression quality
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Lower the quality to create smaller files, then start the
                compression.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-3xl font-black text-blue-600">3</p>
              <h3 className="mt-4 text-xl font-black">
                Download compressed files
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Download each compressed image separately or save the complete
                batch as a ZIP.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Why compress images?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              Smaller image files can help websites load faster, reduce
              bandwidth usage and improve the experience for visitors on
              mobile devices.
            </p>

            <p>
              Compression is useful before uploading images to websites,
              stores, blogs, email campaigns or social platforms.
            </p>

            <p>
              Your files are processed locally inside your browser, so they are
              not intentionally uploaded to a server during compression.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black">
            Image compression frequently asked questions
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
    </div>
  );
}