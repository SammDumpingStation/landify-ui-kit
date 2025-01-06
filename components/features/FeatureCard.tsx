import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const FeatureCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Card className="flex items-center gap-5 justify-between p-5 w-full bg-white border-primary-cta2 max-w-[330px] mx-auto">
      <Image
        src={icon}
        width={50}
        height={50}
        alt="Logo"
      />
      <span className="p flex-1 text-start">{title}</span>
    </Card>
  );
};

export default FeatureCard;
