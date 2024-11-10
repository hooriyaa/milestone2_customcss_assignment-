"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../public/portfolio/img1.png";
import img2 from "../../public/portfolio/img2.png";
import img3 from "../../public/portfolio/img3.png";
import img4 from "../../public/portfolio/img4.png";

export default function PortfolioSection() {
    return (
      <section className="section">
        <div className="container2">
          <div className="contentWrapper">
            <motion.div className="leftContent">
              <h2 className="heading">Portfolio</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
                scelerisque viverra at id senectus scelerisque.
              </p>
              <button className="button">HIRE ME</button>
            </motion.div>
  
            <motion.div className="rightGrid">
              <div className="imageContainer">
                <Image src={img1} alt="Portfolio 1" fill className="image"/>
              </div>
              <div className="imageContainer">
                <Image src={img2} alt="Portfolio 2" fill className="image"/>
              </div>
              <div className="imageContainer">
                <Image src={img3} alt="Portfolio 3" fill className="image" />
              </div>
              <div className="imageContainer">
                <Image src={img4} alt="Portfolio 4" fill className="image"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }