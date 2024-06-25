import { Facebook, Mail, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex flex-col justify-between bg-zinc-900 p-4 text-xs font-thin text-neutral-300 lg:flex-row">
      <nav className="mb-4 flex flex-col items-center gap-4 lg:flex-row">
        <a
          href="#privacy-policy"
          className="transition-all duration-300 hover:text-orange-400"
        >
          Privacy Policy
        </a>
        <a
          href="#terms-of-service"
          className="transition-all duration-300 hover:text-orange-400"
        >
          Terms of Service
        </a>
        <a
          href="#contact-us"
          className="transition-all duration-300 hover:text-orange-400"
        >
          Contact Us
        </a>
      </nav>
      <div className="flex justify-center gap-4 md:flex-row">
        <a
          href="mailto:contact@example.com"
          className="transition-all duration-300 hover:text-orange-400"
        >
          <Mail />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          className="transition-all duration-300 hover:text-orange-400"
        >
          <Twitter />
        </a>
        <a
          href="https://facebook.com/yourprofile"
          className="transition-all duration-300 hover:text-orange-400"
        >
          <Facebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
