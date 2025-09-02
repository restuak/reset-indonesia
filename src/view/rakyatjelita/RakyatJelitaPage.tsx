"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      label: "BRAVE PINK",
      link: "/rakyatjelita/bravepink",
      bg: "bg-bravepink",
      text: "text-white",
      img: "/img/prev/prev1.jpg",
    },
    {
      label: "HERO GREEN",
      link: "/rakyatjelita/herogreen",
      bg: "bg-herogreen",
      text: "text-white",
      img: "/img/prev/prev2.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen w-screen text-white flex flex-col items-center justify-center px-6 bg-black">
      {/* Judul */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-bravepink mb-12 uppercase text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Rakyat Jelita
      </motion.h1>

      {/* Card */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => router.push(card.link)}
            className={`${card.bg} ${card.text} rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:brightness-110 transition-all duration-300`}
          >
            <div className="relative w-full h-64">
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-2xl md:text-3xl font-bold">
                  {card.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
