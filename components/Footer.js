import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>© 2026 ImageConvert. Free online image conversion tools.</p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/tools" className="hover:text-white">
            Tools
          </Link>

          <Link href="/about" className="hover:text-white">
            About
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
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
  );
}