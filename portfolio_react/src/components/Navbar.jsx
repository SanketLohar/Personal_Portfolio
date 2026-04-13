import React, { useState, useEffect } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger in the middle-top area
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <Motion.nav
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[75%]
                 backdrop-blur-xl bg-dark-200/40 border border-white/10
                 rounded-2xl px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="relative font-bold text-xl">
          Sanket
          <span className="text-purple-400"> Lohar</span>
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-purple-400" : "text-white/60 hover:text-white"
                }`}
              >
                {item}
                {isActive && (
                  <Motion.span
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {showMenu ? (
            <FaTimes onClick={() => setShowMenu(false)} className="text-xl cursor-pointer" />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} className="text-xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 flex flex-col items-center gap-6"
        >
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 flex flex-col items-center gap-6"
        >
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              onClick={() => setShowMenu(false)}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-white/80 hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </Motion.div>
        </Motion.div>
      )}
    </Motion.nav>
  );
}

export default Navbar;
