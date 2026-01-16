export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-4xl font-bold text-gray-900">{value}</p>
    </div>
  );
}