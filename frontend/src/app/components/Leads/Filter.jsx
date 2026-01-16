"use client";

export default function LeadsFilters({
  search,
  setSearch,
  status,
  setStatus,
  stage,
  setStage,
  onApply,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Status</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Converted</option>
        </select>

        <select
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Stage</option>
          <option>Cold</option>
          <option>Warm</option>
          <option>Hot</option>
        </select>

        <button
          onClick={onApply}
          className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
