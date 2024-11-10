"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../public/logo2.jpeg";
import Menu from "./menu";


const navItems = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link href="/" className="logo-section">
          <div className="logo-wrapper">
            <Image
              src={logo}
              alt="logo"
              fill
              className="logo-image"
              priority
            />
          </div>
          <span className="brand-name">Alina Lee</span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex  gap-3 mr-12">
          <Link
            target="_blank"
            href="https://www.facebook.com/share/1Er84PR1oV/?mibextid=qi2Omg"
            className="social-link facebook"
          >
            <FaFacebook className="social-icon" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/hooriyaa"
            className="social-link github"
          >
            <FaGithub className="social-icon" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/hooriyaa"
            className="social-link twitter"
          >
            <FaTwitter className="social-icon" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/hooriyaa"
            className="social-link instagram"
          >
            <FaInstagram className="social-icon" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/hooriyaa"
            className="social-link youtube"
          >
            <FaYoutube className="social-icon" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
  <Menu />
</div>
      </div>
    </nav>
  );
}