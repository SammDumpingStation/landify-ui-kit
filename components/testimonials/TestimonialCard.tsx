import Image from "next/image";
import { Card } from "../ui/card";
import { Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <Card className="bg-white border-0 shadow-0 space-y-[30px] px-[30px] py-[40px]">
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
        <div className="flex gap-1 justify-center w-full">
          <Star className="h-6 w-6 fill-secondary-s1 stroke-secondary-s1" />
          <Star className="h-6 w-6 fill-secondary-s1 stroke-secondary-s1" />{" "}
          <Star className="h-6 w-6 fill-secondary-s1 stroke-secondary-s1" />{" "}
          <Star className="h-6 w-6 fill-secondary-s1 stroke-secondary-s1" />{" "}
          <Star className="h-6 w-6 fill-secondary-s1 stroke-secondary-s1" />
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
