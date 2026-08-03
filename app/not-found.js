import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-8xl font-black text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-black">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg text-slate-600 leading-8">
          Sorry, the page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}