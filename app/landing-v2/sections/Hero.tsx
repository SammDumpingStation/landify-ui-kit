import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="main-container !pt-[135px] space-y-10">
      <div className="space-y-[30px]">
        <div className="space-y-5">
          <h1 className="h1">Create Engaging Landing Pages</h1>
          <p className="lead">
            Build beautiful landing pages in record time with Anima's Landing
            Page UI kit for Figma. No code required!
          </p>
        </div>
        <PrimaryButton title="Get Started" rocket />
      </div>
      <Image
        src={"/images/v2-hero.png"}
        width={320}
        height={320}
        alt="Hero Mockup"
      />
    </section>
  );
};

export default Hero;
