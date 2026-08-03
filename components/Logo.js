import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg">
        IC
      </div>

      <div>
        <div className="text-2xl font-black tracking-tight text-slate-900">
          ImageConvert
        </div>

        <div className="-mt-1 text-xs font-semibold tracking-wide text-slate-500">
          Fast • Free • Private
        </div>
      </div>
    </Link>
  );
}