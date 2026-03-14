/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Loader = () => {
  const { isLoading, setIsLoading } = useApp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-sm px-6">

        {/* Creative Code Logo Animation */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          >
            {/* Left Bracket */}
            <motion.path
              d="M35 20 L15 50 L35 80"
              fill="transparent"
              stroke="#06b6d4" // cyan-500
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Right Bracket */}
            <motion.path
              d="M65 20 L85 50 L65 80"
              fill="transparent"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
            {/* Slash */}
            <motion.path
              d="M55 20 L45 80"
              fill="transparent"
              stroke="#14b8a6" // teal-500
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            />
          </motion.svg>

          {/* Subtle pulse effect behind the logo */}
          <motion.div
            className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Text Reveal */}
        <motion.div className="text-center overflow-hidden mb-6">
          <motion.h1
            className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            HASWIN RAJ
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-2 font-mono text-sm tracking-widest uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          >
            Initializing Portfolio
          </motion.p>
        </motion.div>

        {/* Minimal Progress Line */}
        <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-teal-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        {/* Percentage */}
        <motion.div
          className="mt-4 text-cyan-500/80 font-mono text-xs tracking-widest flex justify-between w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>SYSTEM.BOOT</span>
          <span>{Math.round(progress)}%</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Loader;