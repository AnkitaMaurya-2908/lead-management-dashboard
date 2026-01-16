"use client";

export default function LeadsPagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-end items-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="px-3 py-1 border rounded-lg text-sm disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1 text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
        className="px-3 py-1 border rounded-lg text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
