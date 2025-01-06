import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const TeamCard = () => {
  return (
    <Card className="border-0 shadow-0 space-y-[30px] px-[30px] py-[40px] bg-white ">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/images/profile-1.png"}
          width={120}
          height={120}
          alt="Testimonial Profiles"
        />
        <h1 className="text-[21px] font-semibold mt-4">David Licuaco</h1>
        <p className="lead">Lead Developer @Selos Academy</p>
      </div>
      <div className="space-y-6">
        <p>
          “The Landing Page UI Kit has been a game changer. The pre-designed
          components and templates have helped us deliver projects faster!”
        </p>
        <div className="flex w-full justify-around">
          <span className="text-sm font-bold text-primary-cta1">Twitter</span>
          <span className="text-sm font-bold text-primary-cta1">Linkedin</span>
          <span className="text-sm font-bold text-primary-cta1">Dribble</span>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
