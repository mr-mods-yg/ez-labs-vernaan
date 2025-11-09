"use client";
import { useState } from "react";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [showNavItems, setShowNavItems] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#FFFBFB59]/35 flex justify-between border-b border-white/10 py-2 z-200">
      <Link href="#hero" className="px-4">
        <Image className="h-12 w-[124px]" alt="logo" src="/logo.png" width={124} height={48} />
      </Link> 

      <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-10 items-center md:px-5 backdrop-blur-md rounded-2xl">
        {showNavItems && (
          <div className="flex flex-col md:flex-row gap-3 text-lg font-instrument items-center">
            <a className="hover:underline transition-all" href="#services">Services</a>
            <a href="#about-us" className="hover:underline transition-all">Their Stories</a>
            <a href="#about-team" className="hover:underline transition-all">Our Story</a>
            <a href="#hero" className="hover:underline transition-all">Varnan</a>
            <a href="#contact" className="rounded-3xl bg-orange-500 px-3 py-2 flex gap-1 md:gap-2 text-white items-center hover:bg-orange-600">
              Let&apos;s Talk <MailIcon />
            </a>
          </div>
        )}

        <div
          className="grid place-items-center cursor-pointer"
          onClick={() => setShowNavItems((prev) => !prev)}
        >
          <Image
            src={"/assets/Menu.svg"}
            alt="menu"
            width={40}
            height={40}
            className={`col-start-1 row-start-1 transition-opacity duration-200 z-0 ${
              showNavItems ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={"/assets/Open.svg"}
            alt="open"
            width={40}
            height={40}
            className={`col-start-1 row-start-1 transition-opacity duration-200 z-10 ${
              showNavItems ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
