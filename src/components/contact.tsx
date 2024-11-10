"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import contactImage from "../../public/home.png";


export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-form-wrapper"
          >
            <div className="contact-form-header">
              <h1 className="contact-form-title">Contact Me</h1>
              <p className="contact-form-text">
                I would love to get suggestions from you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xdknoaab"
              method="POST"
              className="contact-form"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="contact-input"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  id="email"
                  name="email"
                  className="contact-input"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <textarea
                  placeholder="Your message"
                  id="message"
                  name="message"
                  required
                  className="contact-textarea"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <button
                  type="submit"
                  className="contact-button"
                >
                  SEND IT
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-image-wrapper"
          >
            <Image
              src={contactImage}
              alt="Contact"
              fill
              className="contact-image"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
