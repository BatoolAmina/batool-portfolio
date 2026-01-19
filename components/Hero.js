"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatAction = (duration, delay) => ({
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
    },
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f7faf7]">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-[#e8f5e9] rounded-full blur-[110px]"
        />
        
        <motion.div 
          variants={floatAction(6, 0)}
          animate="animate"
          className="absolute top-[20%] right-[15%] w-24 h-24 border border-[#c8e6c9] rounded-full hidden md:block"
        />
        
        <motion.div 
          variants={floatAction(8, 1)}
          animate="animate"
          className="absolute bottom-[25%] left-[12%] opacity-30 hidden md:block"
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            {[0, 20, 40].map((x) => [0, 20, 40].map((y) => (
              <circle key={`${x}-${y}`} cx={x+10} cy={y+10} r="2.5" fill="#81c784" />
            )))}
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">

          <motion.h1 
            variants={item}
            className="text-6xl font-[Inter] md:text-8xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase mb-8"
          >
            Hi, I am <br />Batool Amina
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xs md:text-sm font-bold text-slate-500 tracking-[0.4em] uppercase mb-12 max-w-2xl"
          >
            Full-Stack Developer
          </motion.p>

          <motion.div variants={item}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, backgroundColor: "#2e7d32", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#1b5e20] text-white text-xs uppercase tracking-[0.3em] font-black px-12 py-5 rounded-full shadow-xl transition-all"
            >
              Explore My Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-[#81c784] uppercase tracking-widest font-black">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8e6c9] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;