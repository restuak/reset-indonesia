"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils"; 

export default function TimelinePage() {
  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl md:text-5xl font-bold mb-12"
      >
        Timeline #ResetIndonesia
      </motion.h1>

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
            contentArrowStyle={{ borderRight: "7px solid var(--bravepink)" }}
            iconStyle={{
              background:
                idx % 2 === 0 ? "var(--bravepink)" : "var(--herogreen)",
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
                className={cn(
                  "text-lg md:text-xl font-semibold mb-2",
                  idx % 2 === 0 ? "text-bravepink" : "text-herogreen"
                )}
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
    </section>
  );
}
