"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; 

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-herogreen"
      initial={{ y: 0 }}
      animate={{ y: "100%" }}
      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
    >
      

      <motion.h1
        className="text-bravepink text-3xl md:text-8xl font-bold font-roboto uppercase"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       
        <p>#ResetIndonesia</p>

      </motion.h1>
    </motion.div>
  );
}
