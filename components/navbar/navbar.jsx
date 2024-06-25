import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const navbar = () => {
  return (
    <nav className="sticky top-0 mx-4 flex items-center justify-between text-orange-400 backdrop-blur-sm z-50">
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            priority={true}
            className="h-auto w-12"
          ></Image>
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-8">
        <ul className="flex flex-row items-center gap-4 px-4">
          <li className="transition-all duration-300 hover:text-orange-300">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-all duration-300 hover:text-orange-300">
            <Link href="/Explore">Explore</Link>
          </li>
          <li className="transition-all duration-300 hover:text-orange-300">
            <Link href="/About">About</Link>
          </li>
       
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
