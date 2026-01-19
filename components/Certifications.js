"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      title: "SHIFT Innovation Think Tank: First Place",
      issuer: "Siemens Healthineers",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/1OM_wA7BldT5rkylS50psk17txDfqUprO/view?usp=sharing",
    },
    {
      title: "SHIFT Innovation Think Tank Program",
      issuer: "Siemens Healthineers",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/1N_8RTbteRGdvMmQJ2rP4uSx48on1aVUS/view?usp=sharing",
    },
    {
      title: "Skyscanner Travel Technology Experience",
      issuer: "Forage",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/1cQ7BzCS058Wn5rfbRCvMRNN-ZgKAYH20/view?usp=sharing",
    },
    {
      title: "Accenture Virtual Experience Program",
      issuer: "Forage",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1FldknVatlU3kqR8NpFP1mm5dQytDRAKd/view?usp=sharing",
    },
    {
      title: "Deloitte Australia Virtual Experience",
      issuer: "Forage",
      date: "May 2025",
      link: "https://drive.google.com/file/d/14eDFX4Bj0lXA7LrJTnmTwDneohkTDFqR/view?usp=sharing",
    },
    {
      title: "Postman API Student Expert",
      issuer: "Postman",
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1dW5i5LPyyRxTSgd-hVzeIessTUDZ9Mb2/view?usp=sharing",
    },
    {
      title: "GSSoC 2024 Contributor (Extended)",
      issuer: "GirlScript Summer of Code",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1WcnFEsg-49jxaFpmd4oTLpiuuHX4MCrs/view?usp=sharing",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "2024",
      link: "https://drive.google.com/file/d/1MInIVc9mAE6B6-ZDrEBxqu9HifgGx7vh/view?usp=sharing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatedSection>
      <section id="certifications" className="container mx-auto px-6 py-14 max-w-7xl relative">
        <div className="absolute right-0 top-0 -z-10 w-80 h-80 bg-[#f1f8f1] rounded-full blur-[120px] opacity-60" />

        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            className="h-[2px] bg-[#81c784] mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            Honors & Awards
          </h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.5em] mt-4">
            Validated Expertise
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => window.open(cert.link, "_blank")}
              className="bg-white rounded-[2.5rem] p-8 border border-[#f0f7f0] shadow-sm hover:shadow-2xl hover:border-[#c8e6c9] transition-all duration-500 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="bg-[#f7faf7] text-[#4caf50] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-500 shadow-sm">
                <Award size={28} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-[Inter] font-bold text-gray-900 leading-tight mb-2 uppercase tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-[#81c784] text-[10px] font-black uppercase tracking-widest mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                  {cert.date}
                </p>
              </div>

              <div className="w-full mt-8 pt-6 border-t border-gray-50 flex justify-center">
                <span className="inline-flex items-center gap-2 text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] group-hover:text-[#2d7a2d] transition-colors">
                  View Credential <ExternalLink size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default Certifications;