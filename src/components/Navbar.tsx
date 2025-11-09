"use client";
import { useState } from "react";
import { MailIcon } from "lucide-react";
import Image from "next/image";

function Navbar() {
  const [showNavItems, setShowNavItems] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#FFFBFB59]/35 backdrop-blur-md flex justify-between border-b border-white/10 py-2 z-50">
      <div className="px-4">
        <Image className="h-12 w-[124px]" alt="logo" src="/logo.png" width={124} height={48} />
      </div>

      <div className="flex gap-10 items-center px-5">
        {showNavItems && (
          <div className="flex flex-col md:flex-row gap-3 text-lg font-instrument items-center">
            <p>Services</p>
            <p>Their Stories</p>
            <p>Our Story</p>
            <p>Varnan</p>
            <p className="rounded-3xl bg-orange-500 px-3 py-2 flex gap-1 md:gap-2 text-white items-center">
              Let&apos;s Talk <MailIcon />
            </p>
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
