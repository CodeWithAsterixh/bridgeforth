export default function TrustBar() {
  return (
    <div className="bg-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded bg-gray-100">Social Work Foundation</div>
          <div className="px-3 py-1 rounded bg-gray-100">Georgia-based</div>
          <div className="px-3 py-1 rounded bg-gray-100">Confidential</div>
        </div>
        <div className="text-xs">Trusted by caregivers across Atlanta metro</div>
      </div>
    </div>
  );
}
