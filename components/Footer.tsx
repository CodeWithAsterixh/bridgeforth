export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="font-bold text-lg">Bridgeforth Consulting Group</div>
            <div className="text-sm text-gray-600 mt-2">2086 Jodeco Rd #1015, McDonough, GA 30253</div>
          </div>
          <div className="text-sm text-gray-600">(404) 730-9818 • info@bridgeforthcg.com</div>
        </div>
      </div>
    </footer>
  );
}
