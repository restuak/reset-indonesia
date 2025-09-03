"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ScrollUpAndHome from "@/components/scrollup";

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      label: "BRAVE PINK",
      sublabel: "App buat foto two-tone #bravepink dan #herogreen (Ver1) 💗",
      link: "/rakyatjelita/bravepink",
      bg: "bg-bravepink",
      text: "text-white",
      img: "/img/prev/prev1.webp",
    },
    {
      label: "HERO GREEN",
      sublabel: "App buat foto two-tone #bravepink dan #herogreen (Ver2) 💚",
      link: "/rakyatjelita/herogreen",
      bg: "bg-herogreen",
      text: "text-white",
      img: "/img/prev/prev2.webp",
    },
    {
      label: "SUARA RAKYAT",
      sublabel: "Suarakan kegelisahan kalian rakyat jelita 💅🏽",
      link: "/rakyatjelita/suara",
      bg: "bg-neutral-800",
      text: "text-white",
      img: "/img/prev/prev3.webp",
    },
  ];

  return (
    <main className="relative min-h-screen w-screen text-white flex flex-col items-center justify-center px-6 bg-black">
      {/* Judul */}
      <motion.h1
        className="text-center text-bravepink text-4xl md:text-6xl pb-5 pt-8 font-bold mb-12 uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Rakyat Jelita
      </motion.h1>

      <motion.h1
        className="text-center text-herogreen text-md md:text-2xl pb-2 font-normal mb-12 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Beberapa website applikasi kreasi dalam merespon gerakan #ResetIndonesia
      </motion.h1>

      {/* Card */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
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
              {/* Overlay  */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center">
                <span className="text-2xl md:text-3xl font-bold">
                  {card.label}
                </span>
                {card.sublabel && (
                  <span className="text-sm md:text-base mt-2 opacity-90">
                    {card.sublabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.h1
        className="container text-center text-neutral-800 text-md md:text-2xl pt-15 pb-5 font-normal mb-12 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Sabar ya, masih banyak fitur yang belum dikembangkan, termasuk halaman ini, harusnya berisi banyak fetch dari karya-karya #RakyatJelita dan perkembangan #ResetIndonesia di media sosial. Ngerjainnya kalau lagi selo, hiksss.</p>
      </motion.h1>
      <ScrollUpAndHome />
    </main>
  );
}
