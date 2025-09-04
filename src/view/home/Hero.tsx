"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  const buttons = [
    {
      label: "TUNTUTAN",
      link: "/tuntutan",
      bg: "bg-white/70",
      hover: "hover:bg-white/0 hover:text-white",
      text: "text-herogreen",
    },
    {
      label: "LINI MASA",
      link: "/linimasa",
      bg: "bg-white/70",
      hover: "hover:bg-white/0 hover:text-white",
      text: "text-herogreen",
    },
    {
      label: "GUGUR 🥀",
      link: "/rip",
      bg: "bg-white/70",
      hover: "hover:bg-white/0 hover:text-white",
      text: "text-herogreen",
    },
    {
      label: "RAKYAT JELITA",
      link: "/rakyatjelita",
      bg: "bg-white/70",
      hover: "hover:bg-white/0 hover:text-white",
      text: "text-herogreen",
    },
  ];

 

  return (
    <main className="relative min-h-screen w-screen text-white overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/web.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          className="uppercase text-sm md:text-3xl tracking-widest text-bravepink mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Transparansi | Reformasi | Empati
        </motion.h2>

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold drop-shadow-lg mb-8 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          RESET INDONESIA
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-14 text-white/90"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Arsip digital rangkuman tuntutan rakyat, linimasa peristiwa penting,
          kreasi masyarakat di dunia maya, serta mengenang mereka yang telah
          gugur demi keadilan dan perubahan di Indonesia.
          <br></br>
          <span className="font-extrabold text-lg md:text-xl text-bravepink hover:text-white/90 transition-colors duration-300">
            #ResetIndonesia
          </span>
        </motion.p>

        {/* Menu Buttons */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => router.push(btn.link)}
              className={`${btn.bg} ${btn.text} px-2 py-2 md:px-4 md:py-3 border-t-white  border-6 opacity-570 amber-50 rounded-full font-semibold shadow-lg transition-all duration-300 cursor-pointer ${btn.hover}`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
