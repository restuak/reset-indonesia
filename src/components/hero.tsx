"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  const buttons = [
    {
      label: "TUNTUTAN",
      link: "/tuntutan",
      bg: "bg-bravepink",
      hover: "hover:bg-bravepink hover:text-white",
      text: "text-herogreen",
    },
    {
      label: "LINIMASA",
      link: "/linimasa",
      bg: "bg-herogreen",
      hover: "hover:bg-herogreen hover:text-white",
      text: "text-bravepink",
    },
    {
      label: "RIP 🥀",
      link: "/rip",
      bg: "bg-bravepink",
      hover: "hover:bg-bravepink hover:text-white",
      text: "text-herogreen",
    },
    {
      label: "RAKYAT JELITA",
      link: "/rakyatjelita",
      bg: "bg-herogreen",
      hover: "hover:bg-herogreen hover:text-white",
      text: "text-bravepink",
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
          className="text-4xl md:text-7xl font-extrabold drop-shadow-lg mb-8 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          RESET <span className="">INDONESIA</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-14 text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Untuk masa depan Indonesia yang lebih adil, bersih, dan
          berdaulat.
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
              className={`${btn.bg} ${btn.text} px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 cursor-pointer ${btn.hover}`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
