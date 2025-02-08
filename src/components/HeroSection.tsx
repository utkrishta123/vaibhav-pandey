"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export default function HeroSection() {
  return (
    <section id="hero-section">
      <LampContainer className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-4">
        <motion.h1
          initial={{ opacity: 0.5, y: 200 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hi, I am Vaibhav Pandey!
          <p className="mt-10 font-normal text-base md:text-xl text-neutral-300 max-w-half mx-auto" style={{ marginBottom: "-8.5rem" }}>
            "Hi, I'm Vaibhav Pandey, a Mechanical Engineer who graduated with a
            B.Tech in 2024. I'm passionate about innovation and problem-solving,
            always eager to apply my technical skills to real-world challenges.
            My interests lie in mechanical design, manufacturing, and
            automation, and I'm excited to explore opportunities that push the
            boundaries of engineering."Hi, I'm Vaibhav Pandey, a Mechanical
            Design Engineer with a passion for precision and innovation. My
            expertise lies in CAD & CAE, where I thrive on tackling complex
            engineering challenges and transforming ideas into efficient,
            tangible designs. I stay updated with emerging technologies and
            industry advancements, continuously refining my skills to create
            solutions that not only address immediate challenges but also
            anticipate future needs. Currently, I'm working at Lohia Corp and
            have previously interned at Advance Valves Global. I'm always eager
            to connect with like-minded professionals, share insights, and
            explore collaborations that drive the future of mechanical
            engineering forward.
          </p>
        </motion.h1>
      </LampContainer>
    </section>
  );
}
