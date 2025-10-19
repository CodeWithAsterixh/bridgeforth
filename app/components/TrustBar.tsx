export default function TrustBar() {
  return (
    <div className="bg-white py-4">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-gray-600 text-sm">
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs sm:text-sm">Social Work Foundation</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs sm:text-sm">Georgia-based</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs sm:text-sm">Confidential</span>
        </div>
        <div className="mt-2 sm:mt-0 text-center sm:text-right text-xs sm:text-sm">
          Trusted by caregivers across Atlanta metro
        </div>
      </div>
    </div>
  );
}
