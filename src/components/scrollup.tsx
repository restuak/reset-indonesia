"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaArrowLeft, FaHome } from "react-icons/fa";
import Credit from "./credit";

export default function ScrollUpAndHome() {
  const [show, setShow] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setShow(scrollY > height * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 bottom-4 flex flex-col items-center gap-2 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-40"
        }`}
      >
        {/* Scroll Up Button */}
        <button
          onClick={scrollToTop}
          className="bg-bravepink text-white p-3 rounded-full shadow-lg hover:bg-neutral-800 transition cursor-pointer"
          title="Scroll to top"
        >
          <FaArrowUp />
        </button>

        {/* Navigation & Kredit Buttons */}
        <div className="flex gap-2 items-center">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="bg-herogreen text-white px-3 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition cursor-pointer uppercase flex items-center gap-1 text-xs md:text-md"
          >
            <FaArrowLeft /> Back
          </button>

          {/* Home Button */}
          <button
            onClick={() => router.push("/")}
            className="bg-herogreen text-white px-3 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition cursor-pointer uppercase flex items-center gap-1 text-xs md:text-md"
          >
            <FaHome /> Home
          </button>
        </div>
        {/* Kredit Button */}
        <button
          onClick={() => setIsCreditOpen(true)}
          className="bg-neutral-600 text-bravepink px-1 py-0.5 md:px-2 md:py-0.5 rounded-lg shadow-lg hover:bg-neutral-800 transition cursor-pointer uppercase text-[8px] md:text-2xs"
        >
          credit
        </button>
      </div>

      {/* Modal Kredit */}
      <Credit isOpen={isCreditOpen} onClose={() => setIsCreditOpen(false)} />
    </>
  );
}
