import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Sermons", to: "/sermons" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 50), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const half = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, half);
  const rightLinks = navLinks.slice(half);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-8">
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`relative font-medium transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-indigo-700 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-gray-700 hover:text-indigo-700"
                  : "text-white hover:text-indigo-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <span
              className={`text-3xl tracking-wide transition-colors duration-300 ${
                scrolled ? "text-indigo-700" : "text-white"
              }`}
              style={{ fontFamily: "MorrisRomanBlack, serif" }}
            >
              TNIACOG
            </span>
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-8">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`relative font-medium transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-indigo-700 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-gray-700 hover:text-indigo-700"
                  : "text-white hover:text-indigo-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/give"
            className={`ml-4 px-5 py-2 rounded-full font-semibold shadow-md transition-colors ${
              scrolled
                ? "bg-indigo-700 text-white hover:bg-indigo-800"
                : "bg-white text-indigo-700 hover:bg-white/90"
            }`}
          >
            Give
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={scrolled ? "text-gray-700 md:hidden" : "text-white md:hidden"}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden shadow-lg px-6 py-4 space-y-4 transition-colors duration-300 ${
              scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white/95 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block font-medium text-gray-700 hover:text-indigo-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/give"
              className="block w-full text-center px-4 py-2 rounded-full bg-indigo-700 text-white font-semibold shadow-md hover:bg-indigo-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              Give
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
