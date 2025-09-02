"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const flowers = ["🌸", "🌺", "🥀", "🌹", "💐", "🍀", "🍂", "💚", "💗", "🌷"];

interface Flower {
  emoji: string;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Bunga() {
  const [petals, setPetals] = useState<Flower[]>([]);

  useEffect(() => {
    const flowerCount = 15;
    const generated = Array.from({ length: flowerCount }).map(() => ({
      emoji: flowers[Math.floor(Math.random() * flowers.length)],
      left: Math.random() * 100,
      size: Math.random() * 24 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setPetals(generated);
  }, []);

  return (
    <>
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 1200, opacity: 1 }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          {petal.emoji}
        </motion.div>
      ))}
    </>
  );
}
