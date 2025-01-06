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
  title: string;
};

const PrimaryButton = ({
  variant = "default",
  rocket = false,
  title,
}: ButtonProps) => {
  return (
    <Button className="" variant={variant}>
      {rocket && <Rocket width={20} height={20} />}
      {title}
      {!rocket && variant === "default" && (
        <ArrowRight width={20} height={20} />
      )}
    </Button>
  );
};

export default PrimaryButton;
