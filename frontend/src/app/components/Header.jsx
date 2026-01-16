"use client";

export default function Header({ activeTab }) {
  const getTitle = () => {
    if (activeTab === "leads") return "Leads Management";
    if (activeTab === "analytics") return "Analytics Overview";
    return "Dashboard";
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900">
        {getTitle()}
      </h2>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          Logout
        </button>

        <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
          Admin
        </button>
      </div>
    </header>
  );
}
