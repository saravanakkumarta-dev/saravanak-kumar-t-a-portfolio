import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motion";

const Hero = () => {
  const name = "Saravanak Kumar T A";
  const heroDescription =
     "Software Developer building reliable web & mobile applications with React, Spring Boot, and offline-first architectures.";
     
    return (
    <section
      id="hero"
      className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start min-h-[80vh] justify-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          variants={fadeInUp}
          className="text-white-600 font-medium mb-4 block"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold text-slate-300 tracking-tight mb-6"
        >
          {name} <br />
          {/* <span className="text-slate-400">{heroTitle}</span> NONE CURRENTLY AS i already have desc*/}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          {heroDescription}
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
