import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Github from "./Github";

type ButtonProps = {
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  rocket?: boolean;
  arrow?: boolean;
  github?: boolean;
  title: string;
  otherStyles?: string;
};

const PrimaryButton = ({
  variant = "default",
  rocket = false,
  arrow = true,
  github = false,
  title,
  otherStyles,
}: ButtonProps) => {
  return (
    <Button className={clsx("flex mx-auto", otherStyles)} variant={variant}>
      {rocket && <Rocket width={20} height={20} />}
      {github && <Github />}
      {title}
      {!rocket && arrow && <ArrowRight width={20} height={20} />}
    </Button>
  );
};

export default PrimaryButton;
