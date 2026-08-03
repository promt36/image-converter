import Link from "next/link";

export const metadata = {
  title: "About ImageConvert | Free Online Image Conversion Tools",
  description:
    "Learn about ImageConvert, a free browser-based platform for converting JPG, PNG, WEBP and AVIF images quickly and privately.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-blue-600">About ImageConvert</p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Simple image conversion without unnecessary complexity
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ImageConvert is a free browser-based toolkit for converting JPG,
              PNG, WEBP and AVIF images quickly, privately and in batches.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
                1
              </div>

              <h2 className="mt-5 text-xl font-black">Fast</h2>

              <p className="mt-3 leading-7 text-slate-600">
                Conversion happens directly in your browser, helping avoid
                unnecessary upload delays.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
                2
              </div>

              <h2 className="mt-5 text-xl font-black">Private</h2>

              <p className="mt-3 leading-7 text-slate-600">
                Supported files remain on your device during normal
                browser-based conversion.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
                3
              </div>

              <h2 className="mt-5 text-xl font-black">Practical</h2>

              <p className="mt-3 leading-7 text-slate-600">
                Convert up to 10 images at once and download files individually
                or as one ZIP archive.
              </p>
            </article>
          </div>

          <div className="mt-16 space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <section>
              <h2 className="text-3xl font-black">Why we built ImageConvert</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Many image conversion websites require uploads, accounts,
                complicated settings or long waiting times. ImageConvert was
                created to offer a simpler experience.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The goal is to make common image conversions easy for students,
                creators, website owners, businesses and anyone who needs a
                quick format change.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black">What the website supports</h2>

              <p className="mt-5 leading-8 text-slate-600">
                ImageConvert currently supports conversion between JPG, PNG,
                WEBP and AVIF formats.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-black">12 conversion tools</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Convert between all currently supported image formats.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-black">Batch processing</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Process up to 10 images in one conversion batch.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-black">Quality controls</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Adjust output quality for supported compressed formats.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-black">ZIP downloads</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Download an entire converted batch in one archive.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black">Our approach to privacy</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Privacy is an important part of the website design. Supported
                image conversions are processed locally inside the browser
                rather than intentionally uploaded to our server.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                This approach can make conversion faster while reducing the
                need to transfer personal files over the internet.
              </p>

              <Link
                href="/privacy-policy"
                className="mt-5 inline-block font-black text-blue-600 hover:text-blue-800"
              >
                Read the Privacy Policy →
              </Link>
            </section>

            <section>
              <h2 className="text-3xl font-black">What comes next</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Future tools may include image compression, resizing, cropping,
                rotation and other useful browser-based image features.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The focus will remain on simple tools, clear interfaces, useful
                results and strong privacy.
              </p>
            </section>
          </div>

          <section className="mt-16 rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-10">
            <p className="font-bold text-blue-300">
              Ready to convert an image?
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Explore all available conversion tools
            </h2>

            <Link
              href="/tools"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-100"
            >
              Browse Tools
            </Link>
          </section>
        </div>
      </section>

      
    </main>
  );
}