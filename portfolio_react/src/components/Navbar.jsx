import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]
                 backdrop-blur-md bg-dark-200/60 border border-white/10
                 rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="relative font-bold text-xl">
          Sanket
          <span className="text-purple-400"> Lohar</span>
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/70 hover:text-white transition group"
            >
              {item}
              <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
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
