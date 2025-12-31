import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/retrocoders.png";

const HEADER_HEIGHT = 80;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  // Collapse header on scroll down, expand on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 50) {
        setIsCollapsed(true);
        setIsOpen(false); // auto-close mobile menu on scroll
      } else {
        setIsCollapsed(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top;
    const offset = elementTop + window.scrollY - HEADER_HEIGHT;

    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const navLinks = [
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          isCollapsed
            ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 h-14 shadow-lg"
            : "bg-transparent h-20"
        }
      `}
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-slate-100">
            Dev<span className="text-blue-500">Portfolio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-300 hover:text-blue-400 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-slate-300 p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToSection(link.href);
                    }, 100);
                  }}
                  className="block w-full text-left text-slate-300 hover:text-blue-400 hover:bg-slate-900 px-3 py-3 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
