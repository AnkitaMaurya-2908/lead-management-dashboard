"use client";

export default function Table({ leads, loading }) {
  const getStatusTextClass = (status) => {
    switch (status) {
      case "Contacted":
        return "text-blue-600";
      case "Converted":
        return "text-green-600";
      case "New":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  if (loading) {
    return <p className="p-6 text-gray-500">Loading leads...</p>;
  }

  if (leads.length === 0) {
    return <p className="p-6 text-gray-500">No leads found</p>;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Stage</th>
            <th className="px-6 py-3 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 font-medium cursor-pointer">
                {lead.name}
              </td>
              <td className="px-6 py-4">{lead.email}</td>

              <td
                className={`px-6 py-4 font-medium ${getStatusTextClass(
                  lead.status
                )}`}
              >
                {lead.status}
              </td>

              <td className="px-6 py-4">{lead.stage}</td>
              <td className="px-6 py-4 text-gray-500">
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
