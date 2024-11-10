"use client";

import { motion } from "framer-motion";
import about from "../../public/about.png";
import Image from "next/image";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="imageContainer"
      >
        <div className="imageContainer">
          <Image src={about} alt="Profile" className="image" />
        </div>
      </motion.div>

      <motion.div {...fadeInUp} className="textContainer">
        <h1 className="heading">About Me</h1>
        <p className="description">
          Creative professional with expertise in digital design and visual
          storytelling. Passionate about creating meaningful and impactful
          experiences.
        </p>
        <button className="button">View My Work</button>
      </motion.div>
    </section>
  );
}
