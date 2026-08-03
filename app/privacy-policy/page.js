import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ImageConvert",
  description:
    "Read the ImageConvert privacy policy and learn how browser-based image conversion protects your files and personal information.",
};

export default function PrivacyPolicyPage() {
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

            <Link href="/privacy-policy" className="text-blue-600">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold text-blue-600">Legal Information</p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            Last updated: August 2, 2026
          </p>

          <div className="mt-12 space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <section>
              <h2 className="text-2xl font-black">1. Introduction</h2>

              <p className="mt-4 leading-8 text-slate-600">
                This Privacy Policy explains how ImageConvert handles
                information when you use our website and browser-based image
                conversion tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                2. Browser-based image processing
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Supported image conversions are performed locally inside your
                web browser. Your selected images are not intentionally
                uploaded to or stored on our server during normal browser-based
                conversion.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Temporary browser URLs and processing data may be created on
                your device to generate previews, converted files and ZIP
                downloads. These temporary resources are removed when they are
                no longer needed or when the page is closed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                3. Information we may collect
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may collect limited technical information automatically,
                such as browser type, device type, approximate location,
                referring pages, pages visited, error information and usage
                statistics.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                This information may be used to maintain the website, improve
                performance, understand how visitors use the tools and protect
                the service from abuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                4. Cookies and similar technologies
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                ImageConvert may use cookies, local storage or similar
                technologies to remember preferences, measure website usage and
                support security.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                You can control or delete cookies through your browser
                settings. Disabling certain technologies may affect some
                website features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                5. Analytics and advertising
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may use third-party analytics services to understand website
                traffic and improve our tools. We may also use advertising
                services in the future.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                These providers may process technical information and use
                cookies according to their own privacy policies. This section
                will be updated when specific analytics or advertising
                providers are added.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                6. Information you send to us
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                When you contact us, we may receive information such as your
                name, email address and the contents of your message. We use
                this information to respond to your request and provide
                support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                7. Third-party websites
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices, security or content
                of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">8. Data security</h2>

              <p className="mt-4 leading-8 text-slate-600">
                We take reasonable measures to protect the website and
                information under our control. However, no internet service or
                storage method can guarantee complete security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                9. Children&apos;s privacy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                ImageConvert is not designed to collect personal information
                from children. If you believe a child has provided personal
                information through our contact methods, please contact us so
                we can review the request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">
                10. Changes to this policy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update this Privacy Policy when our website, tools or
                legal obligations change. The latest version will be posted on
                this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black">11. Contact</h2>

              <p className="mt-4 leading-8 text-slate-600">
                Questions about this Privacy Policy can be submitted through
                the contact page once it is available.
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
          </div>
        </div>
      </footer>
    </main>
  );
}