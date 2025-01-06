import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
