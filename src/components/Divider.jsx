import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 flex items-center justify-center">
      {/* Left Fade */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      
      {/* Center "Data Node" or Symbol */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-200 border border-blue-500/50 rotate-45 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      />
    </div>
  );
};

export default Divider;