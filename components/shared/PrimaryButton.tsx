import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Rocket } from "lucide-react";

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
  title: string;
};

const PrimaryButton = ({
  variant = "default",
  rocket = false,
  arrow = true,
  title,
}: ButtonProps) => {
  return (
    <Button className="" variant={variant}>
      {rocket && <Rocket width={20} height={20} />}
      {title}
      {!rocket && arrow && (
        <ArrowRight width={20} height={20} />
      )}
    </Button>
  );
};

export default PrimaryButton;
