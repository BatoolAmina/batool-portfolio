"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Server, 
  Wrench, 
  BrainCircuit, 
  Code2, 
  ShieldCheck,
  Globe,
  Github,
  Zap,
  Layout
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={40} />,
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ],
    },
    {
      title: 'Frontend',
      icon: <Palette size={40} />,
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML', icon: <Layout size={16} /> },
        { name: 'CSS', icon: <Palette size={16} /> }
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={40} />,
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'REST APIs', icon: <Globe size={16} /> }
      ],
    },
    {
      title: 'Data & AI',
      icon: <BrainCircuit size={40} />,
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'NLP', icon: <BrainCircuit size={16} /> },
        { name: 'BERT', icon: <Zap size={16} /> }
      ],
    },
    {
      title: 'Workflow',
      icon: <Wrench size={40} />,
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: <Github size={16} /> },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <AnimatedSection>
      <section id="skills" className="container mx-auto px-6 py-20 max-w-7xl relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-[#f1f8f1] rounded-full blur-[120px] opacity-60" />

        <div className="flex flex-col items-center mb-24">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} viewport={{ once: true }} className="h-[3px] bg-[#81c784] mb-8" />
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-widest uppercase text-center">
            Technical Stack
          </h2>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.6em] mt-6">Expertise & Developer Tools</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
              className="bg-white rounded-[3rem] p-10 border border-[#f0f7f0] shadow-md hover:shadow-2xl hover:border-[#c8e6c9] transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="bg-[#f7faf7] text-[#4caf50] w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-500 shadow-sm group-hover:rotate-6">
                {React.cloneElement(category.icon, { size: 36 })}
              </div>
              
              <h3 className="text-2xl font-[Inter] font-black text-gray-900 mb-8 tracking-tighter uppercase">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.1, backgroundColor: "#4caf50", color: "#ffffff", borderColor: "#4caf50" }}
                    className="flex items-center gap-3 bg-[#fbfdfb] text-gray-600 text-xs font-bold px-5 py-2.5 rounded-full border border-[#f1f8f1] uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    {typeof skill.icon === 'string' ? (
                      <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                    ) : (
                      skill.icon
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
