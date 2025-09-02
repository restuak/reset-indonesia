"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaArrowLeft, FaHome } from "react-icons/fa";

export default function ScrollUpAndHome() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      if (scrollY > height * 0.8) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 bottom-4 flex flex-col items-center gap-3 transition-opacity duration-300 ${
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

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="bg-herogreen text-white px-6 py-2 rounded-lg shadow-lg hover:bg-neutral-800 transition cursor-pointer uppercase flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Home Button */}
        <button
          onClick={() => router.push("/")}
          className="bg-herogreen text-white px-6 py-2 rounded-lg shadow-lg hover:bg-neutral-800 transition cursor-pointer uppercase flex items-center gap-2"
        >
          <FaHome /> Home
        </button>
      </div>
    </div>
  );
}
