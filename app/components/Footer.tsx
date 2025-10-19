export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="font-semibold text-lg text-gray-900">Bridgeforth Consulting Group</div>
            <div className="text-sm text-gray-600 mt-2">
              2086 Jodeco Rd #1015, McDonough, GA 30253
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mt-1 md:mt-0">
              (404) 730-9818 •{" "}
              <a
                href="mailto:info@bridgeforthcg.com"
                className="text-blue-600 hover:underline"
              >
                info@bridgeforthcg.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-200"></div>

        {/* Bottom links */}
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sm text-gray-600">
          <a href="/privacy" className="hover:text-gray-900">
            Privacy
          </a>
          <a href="/terms" className="hover:text-gray-900">
            Terms
          </a>
          <a href="/non-discrimination" className="hover:text-gray-900">
            Non-discrimination
          </a>
          <a href="/refer-a-client" className="hover:text-gray-900">
            Refer a client
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Bridgeforth Consulting Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
