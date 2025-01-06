"use client";
import React, { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav className="fixed top-0 w-full py-5 bg-secondary-s1 z-50 border-b border-foreground">
      <div className="flex justify-between px-5 md:px-8 lg:px-10 xl:px-[50px]">
        <Link href={"/"}>
          <Image
            src={"/logos/logo-mark.svg"}
            width={32}
            height={32}
            alt="Logo"
          />
        </Link>
        <PrimaryButton title="Get Started" otherStyles="max-lg:hidden" />

        <Button
          size={"icon"}
          variant={"link"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {!menuOpen ? (
            <Menu className="w-8 h-8 lg:hidden" />
          ) : (
            <X className="w-8 h-8 lg:hidden" />
          )}
        </Button>
      </div>
      {menuOpen && (
        <div className="px-10 flex flex-col text-lg py-5 gap-5">
          <Link href={"/"}>Landing Page V1</Link>
          <Link href={"/"}>Landing Page V2</Link>
          <Link href={"/"}>Landing Page V3</Link>
          <Link href={"/"}>Landing Page V4</Link>
          <PrimaryButton title="Contact Me" otherStyles="w-full" rocket />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
