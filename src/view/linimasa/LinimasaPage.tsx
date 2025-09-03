"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeline } from "@/data/timeline";
import ScrollUpAndHome from "@/components/scrollup";

export default function LinimasaPage() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16 pb-32">
      {showAlert && (
        <motion.div
          initial={{ opacity: 1, x: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, x: 30 }}
          transition={{ duration: 2 }}
          className="fixed right-[17%] md:right-[27%] top-5 justify-center items-center text-center  bg-bravepink text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          Halaman ini masih perlu dikembangkan, karena kekurangan bahan
          data riset yang mendalam. Kedepan akan disempurnakan. Terima kasih.
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-bravepink text-4xl md:text-6xl pb-5 pt-8 font-bold mb-12 uppercase"
      >
        Linimasa <span className="text-herogreen">#ResetIndonesia</span>
      </motion.h1>

      {/* Timeline */}
      <VerticalTimeline>
        {timeline.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            contentStyle={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              borderRadius: "1rem",
              boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ff66b3" }}
            iconStyle={{
              background: idx % 2 === 0 ? "#ff66b3" : "#1b602f",
              color: "#fff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-lg md:text-xl font-semibold mb-2 uppercase ${
                  idx % 2 === 0 ? "text-bravepink" : "text-herogreen"
                }`}
              >
                {item.event}
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                {item.details}
              </p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <ScrollUpAndHome />
    </section>
  );
}
