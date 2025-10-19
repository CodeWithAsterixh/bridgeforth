import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-primary font-bold text-xl">Bridgeforth</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/consultation">Consultation</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a className="hidden md:inline-block text-sm text-gray-600" href="tel:(404)730-9818">(404) 730-9818</a>
          <button className="bg-accent text-white px-4 py-2 rounded-md text-sm">Book a Call</button>
        </div>
      </div>
    </header>
  );
}
