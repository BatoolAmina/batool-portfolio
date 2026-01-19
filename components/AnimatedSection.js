"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}