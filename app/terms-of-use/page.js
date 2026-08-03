import Link from "next/link";

export const metadata = {
  title: "Terms of Use | ImageConvert",
  description:
    "Read the ImageConvert terms of use for our free browser-based image conversion tools.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            ImageConvert
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/tools" className="hover:text-blue-600">
              Tools
            </Link>

            <Link href="/terms-of-use" className="text-blue-600">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold text-blue-600">Legal Information</p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            Last updated: August 2, 2026
          </p>

          <div className="mt-12 space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <section>
              <h2 className="text-2xl font-black">1. Acceptance of terms</h2>

              <p className="mt-4 leading-8 text-slate-600">
                By accessing or using ImageConvert, you agree to these Terms of
                Use. If you do not agree with these terms, please do not use
                the website or its tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                2. Description of the service
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                ImageConvert provides browser-based image conversion tools for
                supported file formats, including JPG, PNG, WEBP and AVIF.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Features, supported formats, upload limits and availability may
                change over time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">3. Permitted use</h2>

              <p className="mt-4 leading-8 text-slate-600">
                You may use ImageConvert for lawful personal, educational and
                commercial purposes, provided that your use does not violate
                these terms or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">4. Prohibited use</h2>

              <p className="mt-4 leading-8 text-slate-600">
                You must not use ImageConvert to process, distribute or support
                content that is illegal, harmful, abusive, fraudulent,
                infringing or designed to interfere with the website or other
                users.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                You must not attempt to overload, reverse engineer, disrupt,
                bypass security controls or gain unauthorized access to the
                website, its systems or related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                5. Your files and responsibilities
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                You are responsible for the images you choose to process and
                for ensuring that you have the legal right to use, convert and
                download them.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                You should keep backup copies of important files. ImageConvert
                is not responsible for lost, corrupted or unavailable files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                6. Browser-based processing
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Supported conversions are generally performed locally inside
                your browser. Performance and format support may depend on your
                browser, device and operating system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                7. No guarantee of compatibility
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We do not guarantee that every image, browser or file format
                will convert successfully. Some formats may have limited
                support depending on browser capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                8. Intellectual property
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                The ImageConvert name, website design, code, written content and
                branding are protected by applicable intellectual property
                laws, except where otherwise stated.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                These terms do not transfer ownership of the website or its
                content to users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                9. Third-party services and links
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                The website may contain links to or integrations with
                third-party services. We are not responsible for their content,
                availability, security or policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                10. Service availability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may modify, suspend or discontinue any part of ImageConvert
                at any time. We do not guarantee uninterrupted or error-free
                availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                11. Disclaimer of warranties
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                ImageConvert is provided on an “as is” and “as available”
                basis. To the maximum extent permitted by law, we disclaim all
                warranties regarding accuracy, reliability, compatibility,
                availability and fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                12. Limitation of liability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                To the maximum extent permitted by law, ImageConvert and its
                operators will not be liable for indirect, incidental,
                consequential or special losses resulting from the use of or
                inability to use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">13. Changes to these terms</h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update these Terms of Use when the website, tools or
                legal requirements change. Continued use of ImageConvert after
                changes are published means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">14. Contact</h2>

              <p className="mt-4 leading-8 text-slate-600">
                Questions about these Terms of Use can be submitted through the
                contact page once it is available.
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row">
          <p>© 2026 ImageConvert. Free online image conversion tools.</p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/tools" className="hover:text-white">
              Tools
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}