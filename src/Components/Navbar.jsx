import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/BangladeshiIT.jpg"; // Adjust path if needed

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Image */}
        <div>
            <a href="/" className="flex items-center">
                <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 rounded-full mr-2"
                />
                <h1 className="text-2xl font-bold flex items-center gap-1">
          <span className="text-black">Bangladeshi</span>
          <span className="text-red-600">I</span>
          <span className="text-green-600">T</span>
        </h1>
            </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black hover:text-red-600 transition font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Contact Button with Gap */}
          <a
            href="#contact"
            className="ml-6 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition font-semibold"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-black"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 },
                  }}
                >
                  <a
                    href={link.href}
                    className="block text-black hover:text-green-600 transition font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}

              {/* Mobile Contact Button */}
              <motion.li
  variants={{
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  }}
>
  <a
    href="#contact"
    onClick={() => setIsOpen(false)}
    className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition font-semibold"
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
