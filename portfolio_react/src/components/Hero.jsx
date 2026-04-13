import React, { useState, useEffect } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { assets } from "../assets/assets";

// --- THE HERO SECTION ---
function Hero() {
  const [particles, setParticles] = useState([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const p = Array.from({ length: 20 }).map(() => ({
      w: Math.random() * 2 + 1 + "px",
      h: Math.random() * 2 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 10 + 10,
    }));

    setParticles(p);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05020a] text-white"
    >
      {/* ================= UNIQUE BACKGROUND: NEURAL VORTEX ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Main Breathing Gradient (The Atmosphere) */}
        <Motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 2. The Rotating Dashed Rings (The Vortex) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vh]">
          <Motion.div
            className="absolute inset-0 border border-dashed border-purple-500/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <Motion.div
            className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] border border-dotted border-purple-400/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
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

      {/* ================= CONTENT ================= */}
      <Motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 min-h-screen flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-24 items-center w-full">
          {/* ================= TYPOGRAPHY ================= */}
          <div>
            <Motion.p
              variants={itemVariants}
              className="uppercase tracking-[0.3em] font-medium text-xs text-purple-400 mb-6"
            >
              Full Stack Developer
            </Motion.p>

            <Motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="block italic">Building</span>
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Platforms
              </span>
              <span className="block text-white">that feel alive</span>
            </Motion.h1>

            <Motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-gray-400 leading-relaxed text-lg"
            >
              I focus on building scalable, modern web products
              where motion, performance, and clarity work together.
            </Motion.p>

            {/* ================= BUTTONS ================= */}
            <Motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-6">
              <Motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-10 py-4 rounded-xl bg-purple-600 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
              >
                Explore Work
              </Motion.a>

              <Motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-10 py-4 rounded-xl border border-purple-500/40 text-purple-300 backdrop-blur hover:bg-purple-500/5 transition-all"
              >
                Contact
              </Motion.a>
            </Motion.div>
          </div>

          {/* ================= AVATAR ================= */}
          <div className="relative flex justify-center items-center">
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

            <Motion.img
              src={assets.profileImg}
              alt="profile"
              className="relative z-10 w-72 md:w-80 object-cover"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <Motion.div
              className="absolute -bottom-16 w-64 h-16 bg-purple-600/50 blur-3xl"
              animate={{ opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>
      </Motion.div>
    </section>
  );
}

export default Hero;