import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="main-container bg-secondary-s1  flex flex-col items-center !pb-0 gap-10">
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
    </div>
  );
};

export default Footer;
