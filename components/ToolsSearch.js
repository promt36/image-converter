"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ToolsSearch({ tools }) {
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return tools;
    }

    return tools.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(normalizedQuery) ||
        tool.source.toLowerCase().includes(normalizedQuery) ||
        tool.target.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query, tools]);

  return (
    <div>
      <div className="mx-auto mb-10 max-w-2xl">
        <label htmlFor="tool-search" className="sr-only">
          Search image converter tools
        </label>

        <div className="relative">
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search JPG, PNG, WEBP or AVIF tools..."
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 pr-14 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl text-slate-400">
            ⌕
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          {filteredTools.length}{" "}
          {filteredTools.length === 1 ? "tool found" : "tools found"}
        </p>
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm font-black text-blue-700">
                  {tool.source}
                </span>

                <span className="text-xl font-black text-slate-400 transition group-hover:translate-x-1">
                  →
                </span>

                <span className="rounded-xl bg-slate-950 px-3 py-2 text-sm font-black text-white">
                  {tool.target}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black transition group-hover:text-blue-600">
                {tool.title} Converter
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {tool.description}
              </p>

              <p className="mt-6 font-black text-blue-600">
                Open converter →
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center">
          <h2 className="text-2xl font-black">No tools found</h2>

          <p className="mt-3 text-slate-600">
            Try searching for JPG, PNG, WEBP or AVIF.
          </p>

          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}