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
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-white text-3xl font-bold uppercase">Reset Indonesia</h1>
    </motion.div>
  );
}
