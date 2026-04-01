import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

// --- THE LOADER COMPONENT ---
// A "Cyber Shutter" effect that slices open to reveal the site
const Loader = () => {
  return (
    <Motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05020a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 1 } }}
    >
      {/* Central Pulsing Core */}
      <Motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 20, opacity: 0 }} // Explodes outward
        transition={{ duration: 0.8 }}
      >
        <div className="w-24 h-24 rounded-full border-4 border-purple-600/30 border-t-purple-500 animate-spin" />
        <div className="absolute w-16 h-16 rounded-full bg-purple-500 blur-xl animate-pulse" />
      </Motion.div>

      {/* The Shutters that slide away */}
      <Motion.div
        className="absolute inset-0 z-10 bg-[#05020a]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }}
        style={{ originY: 0 }} // Slides up
      />
      <Motion.div
        className="absolute inset-0 z-10 bg-[#05020a]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }}
        style={{ originY: 1 }} // Slides down
      />
    </Motion.div>
  );
};

// --- THE HERO SECTION ---
function Hero() {
  const [loading, setLoading] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const p = Array.from({ length: 20 }).map(() => ({
      w: Math.random() * 2 + 1 + "px",
      h: Math.random() * 2 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 10 + 10,
    }));

    const t = setTimeout(() => setParticles(p), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#05020a] text-white"
      >
        {/* ================= UNIQUE BACKGROUND: NEURAL VORTEX ================= */}
        {/* Replacing the old rotating lines with a complex geometric system */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* 1. Main Breathing Gradient (The Atmosphere) */}
          <Motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 2. The Rotating Dashed Rings (The Vortex) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vh]">
            
            {/* Ring 1: Large & Slow */}
            <Motion.div
              className="absolute inset-0 border border-dashed border-purple-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Ring 2: Medium & Reverse */}
            <Motion.div
              className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] border border-dotted border-purple-400/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Ring 3: Small & Fast + Ellipse */}
            <Motion.div
              className="absolute top-[30%] left-[30%] right-[30%] bottom-[30%] border border-purple-500/20 rounded-[40%] blur-[1px]"
              animate={{ rotate: 180, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>

          {/* 3. Floating Particles (Digital Dust) */}
          {particles.map((p, i) => (
            <Motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{ width: p.w, height: p.h, top: p.top, left: p.left, opacity: p.opacity }}
              animate={{ y: [0, -100, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {/* ================= CONTENT (YOUR ORIGINAL STYLE) ================= */}
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-24 items-center w-full">

            {/* ================= TYPOGRAPHY ================= */}
            <div>
              <Motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="uppercase tracking-[0.45em] text-xs text-purple-400 mb-6"
              >
                Full Stack Developer
              </Motion.p>

              <Motion.h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                <Motion.span
                  className="block"
                  animate={{ letterSpacing: ["0em", "0.06em", "0em"] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  Building Platforms
                </Motion.span>

                <Motion.span
                  className="block text-purple-400"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  that feel alive
                </Motion.span>
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 max-w-xl text-gray-400 leading-relaxed"
              >
                I focus on building scalable, modern web products
                where motion, performance, and clarity work together.
              </Motion.p>

              {/* ================= BUTTONS ================= */}
              <div className="mt-12 flex gap-8">
                <Motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 45px rgba(124,58,237,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-10 py-4 rounded-xl bg-purple-600 font-semibold"
                >
                  Explore Work
                </Motion.a>

                <Motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-10 py-4 rounded-xl border border-purple-500/40 text-purple-300 backdrop-blur"
                >
                  Contact
                </Motion.a>
              </div>
            </div>

            {/* ================= AVATAR (KEPT EXACTLY AS REQUESTED) ================= */}
            <div className="relative flex justify-center items-center">
              {/* energy echo layers */}
              {[...Array(3)].map((_, i) => (
                <Motion.img
                  key={i}
                  src={assets.profileImg}
                  alt=""
                  className="absolute w-72 md:w-80 object-cover opacity-25"
                  animate={{
                    y: [0, -22 + i * 6, 0],
                    x: [0, i * 8, 0],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* main avatar */}
              <Motion.img
                src={assets.profileImg}
                alt="profile"
                className="relative z-10 w-72 md:w-80 object-cover"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* energy base */}
              <Motion.div
                className="absolute -bottom-16 w-64 h-16 bg-purple-600/50 blur-3xl"
                animate={{ opacity: [0.25, 0.6, 0.25] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;