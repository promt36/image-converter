import Link from "next/link";

export const metadata = {
  title: "Contact | ImageConvert",
  description:
    "Contact the ImageConvert team with questions, feedback or business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-black">
            ImageConvert
          </Link>

          <nav className="hidden gap-7 font-semibold md:flex">
            <Link href="/">Home</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/contact" className="text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-bold text-blue-600">
            We'd love to hear from you
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Contact ImageConvert
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have a question, found a bug or want to suggest a new feature?
            Send us a message and we'll get back to you as soon as possible.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow">

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-bold">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <button
              className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </div>

        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-center text-slate-400">
        © 2026 ImageConvert
      </footer>
    </main>
  );
}