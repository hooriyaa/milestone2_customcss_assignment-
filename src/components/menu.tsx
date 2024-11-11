"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import logo from "../../public/logo2.jpeg";

const navItems = ["Home", "About", "Portfolio", "Contact"];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="mobile-menu-container">
      <button onClick={toggleMenu} className="menu-toggle-button">
        <CgMenuRightAlt className="menu-icon" />
      </button>

      <div
        className={`slide-menu ${isOpen ? "open" : ""}`}
        // onClick={handleOutsideClick}
      >
        {/* Dedicated close button */}
        <button onClick={toggleMenu} className="menu-close">
          <AiOutlineClose className="menu-icon" />
        </button>

        <div className="menu-content">
          {/* Mobile Logo */}
          <div className="mobile-logo">
            <div className="logo-wrapper">
              <Image
                src={logo}
                alt="Alina Lee Logo"
                fill
                className="logo-image"
              />
            </div>
            <span className="brand-name">Alina Lee</span>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="nav-item"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-links">
            <Link href="#" className="social-link">
              <FaFacebook className="social-icon facebook" />
            </Link>
            <Link href="#" className="social-link">
              <FaGithub className="social-icon github" />
            </Link>
            <Link href="#" className="social-link">
              <FaTwitter className="social-icon twitter" />
            </Link>

            <Link href="#" className="social-link">
              <FaInstagram className="social-icon instagram" />
            </Link>
            <Link href="#" className="social-link">
              <FaYoutube className="social-icon youtube" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
