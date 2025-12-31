import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motion";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="relative">
            {/* Image Container with Glow Effect */}
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm group">
              {/* Placeholder Image - REPLACE src with your actual photo */}
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-blue-500/20 rounded-2xl"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border-2 border-purple-500/20 rounded-2xl"></div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-200">
              Developing with a focus on{" "}
              <span className="text-blue-400">Movement</span> &{" "}
              <span className="text-purple-400">Usability</span>.
            </h3>

            <div className="text-slate-400 space-y-4 leading-relaxed">
              {/* <span className="text-slate-200 font-medium">StockPile</span> or a mobile-first tool like <span className="text-slate-200 font-medium">GST Calculator</span>, */}
              <p>
                I’m a software developer focused on building stable, real-world
                applications rather than demos.{" "}
              </p>
              <p>
                I’ve worked on production-ready tools like a GST Calculator
                published on Google Play and an offline-first inventory system
                designed for unreliable network environments.{" "}
              </p>{" "}
              <p>
                {" "}
                I enjoy working across the stack — from clean React interfaces
                to backend APIs using Spring Boot — with a strong emphasis on
                correctness, performance, and maintainability.{" "}
              </p>{" "}
              <p>
                Currently, I’m looking for opportunities where I can contribute
                to real products, learn from experienced teams, and grow as an
                engineer.{" "}
              </p>
            </div>

            {/* Quick Stats / Tech Tags */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-blue-400">
                  {new Date().getFullYear() - 2024}
                </h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-purple-400">4</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group transition-colors"
              >
                Let's work together
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
