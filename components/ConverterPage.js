import ImageConverter from "@/components/ImageConverter/ImageConverter";


export default function ConverterPage({
  title,
  description,
  acceptedTypes,
  outputFormat,
  outputExtension,
  uploadLabel,
  sourceName,
  targetName,
  introduction = [],
  faqs = [],
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-blue-600">
            Free Online Image Converter
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-12 text-left">
            <ImageConverter
              acceptedTypes={acceptedTypes}
              outputFormat={outputFormat}
              outputExtension={outputExtension}
              uploadLabel={uploadLabel}
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
            How to convert {sourceName} to {targetName}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">1</p>

              <h3 className="mt-3 text-xl font-black">
                Upload {sourceName} images
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Choose up to 10 {sourceName} images from your device or drag
                them into the upload area.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">2</p>

              <h3 className="mt-3 text-xl font-black">
                Convert to {targetName}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Adjust the output quality and start the batch conversion.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-3xl font-black text-blue-600">3</p>

              <h3 className="mt-3 text-xl font-black">
                Download your files
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Download each converted image separately or save the complete
                batch as a ZIP file.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Why convert {sourceName} to {targetName}?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            {introduction.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-slate-200 bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black">
            {sourceName} to {targetName} frequently asked questions
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

      
    </main>
  );
}