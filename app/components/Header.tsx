import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui-tags";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Consultation", href: "/consultation" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo and desktop nav */}
        <div className="flex items-center gap-4">
          <div className="text-primary font-bold text-xl">Bridgeforth</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.title} to={link.href} aria-label={link.title}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop contact + button */}
        <div className="hidden md:flex items-center gap-3">
          <a className="text-sm text-gray-600" href="tel:(404)730-9818">(404) 730-9818</a>
          <Link to="/consultation">
            <Button variant="primary" className="px-4 py-2 rounded-md text-sm">Book a Call</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with motion/react animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[56px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden"
          >
            <nav className="flex flex-col gap-2 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 text-base py-2 block"
                >
                  {link.title}
                </Link>
              ))}
              <a className="text-gray-700 text-base py-2 block" href="tel:(404)730-9818">(404) 730-9818</a>
              <Link to="/consultation" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" className="w-full mt-2 text-sm">Book a Call</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
