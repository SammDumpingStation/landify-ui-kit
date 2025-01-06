import Image from "next/image";
import { Card } from "../ui/card";

const ProjectCard = () => {
  return (
    <Card className="flex flex-col max-w-[370px] bg-white border-0 rounded-[20px] overflow-hidden mx-auto">
      <Image
        src={"/images/image-placeholder.png"}
        width={315}
        height={278}
        alt="Image Placeholder"
        className="w-full"
      />
      <div className="text-start p-[30px]">
        <h1 className="font-semibold text-[28px]">Project Details</h1>
        <span className="font-mulish ">Short Description</span>
        <span className="font-mulish block">Categories</span>
      </div>
    </Card>
  );
};

export default ProjectCard;
