import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex justify-between w-full p-5 md:px-8 lg:px-10 xl:px-[50px] bg-secondary-s1">
      <Image src={"/logos/logo-mark.svg"} width={32} height={32} alt="Logo" />
      <PrimaryButton title="Get Started" />
    </nav>
  );
};

export default Navbar;
