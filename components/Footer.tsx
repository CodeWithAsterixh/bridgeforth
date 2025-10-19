export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="font-bold text-lg">Bridgeforth Consulting Group</div>
            <div className="text-sm text-gray-600 mt-2">2086 Jodeco Rd #1015, McDonough, GA 30253</div>
          </div>
          <div className="text-sm text-gray-600">(404) 730-9818 • <a href="mailto:info@bridgeforthcg.com">info@bridgeforthcg.com</a></div>
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <a href="/privacy" className="text-gray-600">Privacy</a>
          <a href="/terms" className="text-gray-600">Terms</a>
          <a href="/non-discrimination" className="text-gray-600">Non-discrimination</a>
          <a href="/refer-a-client" className="text-gray-600">Refer a client</a>
        </div>
      </div>
    </footer>
  );
}
