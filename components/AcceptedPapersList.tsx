"use client";
import { useState, useMemo } from "react";
import { registeredPapers, Paper } from "@/data/registeredPapers";

export default function AcceptedPapersList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return registeredPapers;
    return registeredPapers.filter(
      (p) =>
        p.id.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full font-serif space-y-4">
      {/* Top Banner & Live Search */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#650010]/20 shadow-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <h3 className="text-[#650010] font-bold text-[17px] sm:text-[19px]">
            Officially Registered Papers
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Publication in Springer LNNS series (SCOPUS Indexed).
          </p>
        </div>
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by ID, Title, or Author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-65 px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#650010] font-sans"
          />
          <span className="bg-[#650010] text-white text-xs font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap">
            {filtered.length} Papers
          </span>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="w-full relative bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden">
        {/* Scrollable inner wrapper with fixed height and sticky header */}
        <div className="max-h-120 sm:max-h-130 overflow-y-auto overflow-x-auto scroll-smooth">
          <table className="w-full text-left border-collapse table-auto min-w-137.5">
            <thead className="sticky top-0 z-10 shadow-sm">
              <tr className="bg-[#650010] text-white text-xs uppercase tracking-wider">
                <th className="p-3 w-[15%] text-center whitespace-nowrap">Paper ID</th>
                <th className="p-3 w-[50%]">Paper Title</th>
                <th className="p-3 w-[35%]">Authors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-500 italic">
                    No registered papers found matching &quot;{query}&quot;
                  </td>
                </tr>
              ) : (
                filtered.map((paper: Paper, idx: number) => (
                  <tr
                    key={paper.id}
                    className={
                      idx % 2 === 0
                        ? "bg-white hover:bg-gray-50 transition-colors"
                        : "bg-[#E6CFCF]/20 hover:bg-[#E6CFCF]/35 transition-colors"
                    }
                  >
                    <td className="p-3 text-center font-bold text-[#650010] whitespace-nowrap align-top">
                      #{paper.id}
                    </td>
                    <td className="p-3 font-semibold text-gray-900 leading-snug align-top wrap-break-word">
                      {paper.title}
                    </td>
                    <td className="p-3 text-xs text-gray-700 leading-relaxed font-sans align-top wrap-break-word">
                      {paper.authors}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info bar showing scroll instruction */}
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 flex justify-between items-center text-[11px] sm:text-xs text-gray-600">
          <span>Showing {filtered.length} of {registeredPapers.length} papers</span>
          <span className="italic text-gray-500">↕ Scroll inside table to view all</span>
        </div>
      </div>
    </div>
  );
}
