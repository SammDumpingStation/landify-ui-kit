import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import Github from "../shared/Github";

const Footer = () => {
  return (
    <footer className="bg-foreground px-5 py-6 space-y-5">
      <div className="flex items-center gap-4">
        <Image
          src={"/icons/instagram.svg"}
          width={32}
          height={32}
          alt="Instagram Icon"
        />
        <Image
          src={"/icons/dribbler.svg"}
          width={32}
          height={32}
          alt="Dribbler Icon"
        />{" "}
        <div className="p-1 rounded-full bg-[#4E4D4D]">
          <Github />
        </div>
        <Image
          src={"/icons/twitter.svg"}
          width={32}
          height={32}
          alt="Twitter Icon"
        />
      </div>
      <p className="text-white text-start">
        © 2023 Anima's Landing Page Ui Kit.{" "}
      </p>
    </footer>
  );
};

export default Footer;
