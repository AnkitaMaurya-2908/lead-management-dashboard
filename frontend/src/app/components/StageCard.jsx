export default function StageCard({ stage, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <p className="text-sm text-gray-500 mb-2">{stage} Leads</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
