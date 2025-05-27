import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/BangladeshiIT.jpg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", dropdown: true },
  { name: "Blog", href: "#blog" },
];

const services = [
  { name: "Web Development", href: "#web-dev" },
  { name: "UI/UX Design", href: "#ui-ux" },
  { name: "SEO Optimization", href: "#seo" },
  { name: "Branding", href: "#branding" },
  { name: "Social Media Marketing", href: "#smm" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.location.hash || "/";
      setActiveLink(current);
    };
    window.addEventListener("hashchange", handleScroll);
    handleScroll();
    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full mr-2" />
          <h1 className="text-2xl font-bold flex items-center gap-1">
            <span className="text-black">Bangladeshi</span>
            <span className="text-red-600">I</span>
            <span className="text-green-600">T</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <div
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className={`cursor-pointer font-medium flex items-center gap-1 ${
                    activeLink === link.href
                      ? "text-red-600"
                      : "text-black hover:text-green-600"
                  }`}
                >
                  {link.name}
                  <FiChevronDown
                    className={`transition-transform ${
                      showDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bg-white shadow-lg mt-2 rounded-md p-3 w-56 z-50"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-orange-500"
                        >
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium ${
                  activeLink === link.href
                    ? "text-red-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                {link.name}
              </a>
            )
          )}

          <a
            href="#contact"
            className="ml-6 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition font-semibold"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md px-4"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col py-4 space-y-3"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="flex justify-between items-center font-medium text-black cursor-pointer hover:text-green-600"
                    >
                      <span>{link.name}</span>
                      <FiChevronDown
                        className={`transition-transform ${
                          showDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-2 ml-2 space-y-2"
                        >
                          {services.map((service) => (
                            <li key={service.name}>
                              <a
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-gray-700 hover:text-orange-500"
                              >
                                {service.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -20 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium ${
                        activeLink === link.href
                          ? "text-red-600"
                          : "text-black hover:text-green-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                )
              )}

              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block mt-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition font-semibold"
                >
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
