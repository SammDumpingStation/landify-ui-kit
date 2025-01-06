import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import Github from "../shared/Github";

const Footer = () => {
  return (
    <footer className="main-container bg-secondary-s1  flex flex-col items-center !pb-[120px] gap-10">
      <div>
        <h1 className="text-[28px] font-semibold">
          Get Landing Page UI Kit Today!
        </h1>
        <p className="lead">
          Break Figma limits and explore the endless possibilities with Anima.
        </p>
      </div>
      <PrimaryButton title="Get Started" rocket />
      <Image
        src={"/images/footer-mockup-mobile.png"}
        width={320}
        height={100}
        alt="Footer Mockup"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-foreground px-5 py-6 space-y-5">
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
      </div>
    </footer>
  );
};

export default Footer;
