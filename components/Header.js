"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/16YkCv8Y-9whBMJIiYWQXC5iFe_nXOOCC/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div 
        className={`container mx-auto max-w-6xl transition-all duration-500 rounded-full px-8 py-3 flex justify-between items-center ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border border-[#e8f5e9] shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <motion.a
          href="#"
          className="text-3xl font-black text-gray-900 tracking-tighter uppercase"
          whileHover={{ scale: 1.02 }}
        >
          Batool Amina
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs font-bold text-gray-400 hover:text-[#4caf50] transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05, backgroundColor: "#1b5e20" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full shadow-md transition-colors"
          >
            Resume <Download size={14} className="inline ml-1" />
          </motion.button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-lg border border-[#f0f7f0] rounded-[2.5rem] p-8 shadow-2xl flex flex-col gap-5 overflow-hidden mx-auto max-w-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-bold text-gray-500 hover:text-[#2d7a2d] py-2 border-b border-gray-50 last:border-0 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] flex justify-center items-center gap-2 shadow-lg"
            >
              Download CV <Download size={16} />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;