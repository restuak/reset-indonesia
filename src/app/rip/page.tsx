"use client";

import { paraKorban } from "@/data/rip";
import Bunga from "@/components/rip/bunga";
import AudioPlayer from "@/components/rip/audio";
import ScrollUpAndHome from "@/components/scrollup";

export default function RIPPage() {
  return (
    <div className="w-screen min-h-screen bg-black text-white relative overflow-hidden pb-24">
      {/* Efek bunga */}
      <Bunga />

      {/* Audio latar */}
      <AudioPlayer />

      <div className="max-w-5xl mx-auto py-20 px-4">
        {/* Informasi atas */}
        <p className="text-center text-herogreen  uppercase tracking-wider">
          Daftar korban jiwa
        </p>
        <p className="text-center text-herogreen mb-6 uppercase tracking-wider">
          25 Agustus - 1 September 2025
        </p>

        {/* Judul */}
        <h1 className="text-center text-bravepink text-4xl md:text-6xl pb-5 pt-2 font-bold mb-12 uppercase">
          In Memoriam
        </h1>

        <p className="text-center text-white/80">
          Kami mengenang dan mendoakan semua korban yang telah berpulang.
        </p>

        <p className="text-center text-herogreen">
          Sebagian dari mereka DIBUNUHPOLISI
        </p>
        <p className="text-center text-herogreen mb-16">#ACAB #1312</p>

        {/* Grid korban */}
        <div className="grid md:grid-cols-3 gap-8">
          {paraKorban.map((victim, i) => (
            <div
              key={i}
              className="bg-herogreen p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center text-center transition hover:brightness-125"
            >
              {/* Foto korban */}
              {victim.foto ? (
                <img
                  src={victim.foto}
                  alt={victim.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-bravepink"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 flex items-center justify-center text-2xl border-2 border-bravepink">
                  🕊️
                </div>
              )}

              {/* Info korban */}
              <h2 className="font-bold text-xl mb-2 text-bravepink uppercase">
                {victim.name}
              </h2>
              <p className="text-white/85 text-sm mb-1">
                {victim.date} | Usia: {victim.age} tahun
              </p>
              <p className="text-white/50 text-sm mb-1">{victim.address}</p>
              <p className="text-bravepink text-sm mb-2">
                {victim.affiliation}
              </p>
              <p className="text-white text-sm">{victim.details}</p>
            </div>
          ))}
        </div>

        {/* Sumber */}
        <p className="text-center text-white/50 mt-12 text-sm ">
          Sumber:{" "}
          <a
            href="https://tirto.id/daftar-korban-tewas-saat-demo-25-agt-1-sept-2025-hgXb"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-bravepink"
          >
            Tirto.id
          </a>{" "}
          dan{" "}
          <a
            href="https://www.instagram.com/p/DOGJYHqkmbH/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-bravepink"
          >
            MalakaProject
          </a>
        </p>
      </div>
      <ScrollUpAndHome />
    </div>
  );
}


