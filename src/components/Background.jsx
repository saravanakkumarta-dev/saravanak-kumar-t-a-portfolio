import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Background = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothScroll, [0, 1], [0, 300]);
  const rotate1 = useTransform(smoothScroll, [0, 1], [0, 45]);
  const scale1 = useTransform(smoothScroll, [0, 0.5, 1], [1, 1.2, 1]);

  const y2 = useTransform(smoothScroll, [0, 1], [0, -300]);
  const x2 = useTransform(smoothScroll, [0, 1], [0, -150]);
  
  const x3 = useTransform(smoothScroll, [0, 1], [0, 150]);
  const y3 = useTransform(smoothScroll, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden bg-slate-950">
      
      {/* Blob 1: Indigo (Deep Purple/Blue) */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"
        initial={{ backgroundColor: "#4f46e5" }} // indigo-600
        animate={{ backgroundColor: ["#4f46e5", "#4338ca", "#4f46e5"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Blob 2: Violet (Glow) */}
      <motion.div
        style={{ y: y2, x: x2 }}
        className="absolute top-[30%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"
        initial={{ backgroundColor: "#7c3aed" }} // violet-600
        animate={{ backgroundColor: ["#7c3aed", "#9333ea", "#7c3aed"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Blob 3: Sky Blue (Accent) */}
      <motion.div
        style={{ x: x3, y: y3 }}
        className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"
        initial={{ backgroundColor: "#0ea5e9" }} // sky-500
        animate={{ backgroundColor: ["#0ea5e9", "#0284c7", "#0ea5e9"] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Noise Texture for that "Film Grain" look */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
    </div>
  );
};

export default Background;