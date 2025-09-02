"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const buttons = [
    {
      label: "TUNTUTAN",
      link: "/tuntutan",
      bg: "bg-bravepink/90",
      hover: "hover:bg-bravepink/70 hover:text-white",
      text: "text-white",
    },
    {
      label: "TIMELINE",
      link: "/timeline",
      bg: "bg-herogreen/90",
      hover: "hover:bg-herogreen/70 hover:text-white",
      text: "text-white",
    },
    {
      label: "RIP",
      link: "/rip",
      bg: "bg-bravepink/90",
      hover: "hover:bg-bravepink/70 hover:text-white",
      text: "text-white",
    },
    {
      label: "RAKYAT BERSATU",
      link: "/rakyatbersatu",
      bg: "bg-herogreen/90",
      hover: "hover:bg-herogreen/70 hover:text-white",
      text: "text-white",
    },
  ];

  return (
    <main className="relative min-h-screen w-screen text-white overflow-hidden">
      {/* Fixed fullscreen background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/web.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          className="uppercase text-sm md:text-lg tracking-widest text-bravepink mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selamat Datang di
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-7xl font-extrabold drop-shadow-lg mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          RESET <span className="text-herogreen">INDONESIA</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-14 text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Saatnya kita menekan tombol reset, bukan hanya untuk merubah arah
          bangsa ini, tapi juga untuk menghapus error lama, membuang file korup,
          dan menginstal ulang masa depan Indonesia yang lebih adil, bersih, dan
          berdaulat.
        </motion.p>

        {/* Menu Buttons */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {buttons.map((btn, i) => (
            <motion.button
              key={i}
              onClick={() => router.push(btn.link)}
              className={`${btn.bg} ${btn.text} px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${btn.hover}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
