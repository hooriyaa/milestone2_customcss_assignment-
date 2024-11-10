"use client";
import heroimage from "../../public/home.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section md:mt-0 mt-9">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="image-container"
        >
          <div className="hero-card">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="image-wrapper"
            >
              <Image
                src={heroimage}
                alt="Photographer with camera"
                className="hero-image "
                width={400}
                height={600}
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="content-container"
        >
          <div className="text-content">
            <h1 className="hero-title">
              Photographer
              <br />& Film Maker
            </h1>
            <p className="hero-subtitle">Los Angeles, USA</p>
          </div>

          <button className="hero-button"> HIRE ME</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
