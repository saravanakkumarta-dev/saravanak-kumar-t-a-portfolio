import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/motion';

const projects = [
  {
    title: "GST Calculator (Android & Web)",
    description:
      "A production-ready GST calculator used by real users. Built with React and Capacitor, featuring accurate tax breakdowns, local calculation history, CSV export, and mobile-first UX. Focused heavily on stability and edge-case handling.",
    tech: ["React", "JavaScript", "Capacitor", "Vite"],
    link: "#"
  },
  {
    title: "SkuHive – Offline-First Inventory Management App",
    description:
      "An offline-first inventory management application designed for small businesses operating with unreliable internet connections. Uses local SQLite storage with a scalable architecture planned for future synchronization.",
    tech: ["React", "Capacitor", "SQLite", "Vite"],
    link: "#"
  },
  {
    title: "Truth or Lie – Multiplayer Guessing Game",
    description:
      "A multiplayer guessing game built with a Spring Boot backend and React frontend, focusing on REST API design, session handling, and clean service separation.",
    tech: ["Spring Boot", "Java", "React", "MongoDB"],
    link: "#"
  }
];

// --- Sub-Component: Auto Scrolling Text ---
const AutoScrollText = ({ content, height = "h-20" }) => {
  const [needsScroll, setNeedsScroll] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // Check if content overflows
  useEffect(() => {
    if (containerRef.current && textRef.current) {
      // If text is taller than container, enable scroll
      setNeedsScroll(textRef.current.scrollHeight > containerRef.current.clientHeight);
    }
  }, [content]);

  return (
    <div 
      ref={containerRef} 
      className={`${height} overflow-hidden relative group`} // 'group' allows pause on hover
    >
      {needsScroll ? (
        // --- Scrolling Version (Seamless Loop) ---
        <div className="animate-vertical-scroll hover:[animation-play-state:paused] flex flex-col">
          {/* Original Text */}
          <p ref={textRef} className="text-slate-400 pb-4">
            {content}
          </p>
          {/* Duplicate Text for Seamless Loop */}
          <p className="text-slate-400 pb-4">
            {content}
          </p>
        </div>
      ) : (
        // --- Static Version (No Scroll needed) ---
        <p ref={textRef} className="text-slate-400">
          {content}
        </p>
      )}

      {/* Fade Gradients for visual polish */}
      {needsScroll && (
        <>
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-slate-900/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
        </>
      )}
    </div>
  );
};

// --- Main Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      {/* Define the custom CSS animation inline or add to index.css */}
      <style>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 15s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-100 mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              variants={fadeInUp}
              whileHover={scaleOnHover}
              // Updated to Dark Mode Glassmorphism
              className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/50 hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all cursor-default flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
              
              {/* Inserted AutoScroll Component */}
              <div className="mb-4">
                 <AutoScrollText content={project.description} height="h-24" />
              </div>

              {/* Spacer to push footer down if needed */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-700/30">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-1 group">
                  View Project 
                  <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;