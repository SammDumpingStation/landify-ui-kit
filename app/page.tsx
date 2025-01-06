import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import SelectedWorks from "./sections/SelectedWorks";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SelectedWorks />
      <Testimonials />
      <Team />
    </main>
  );
}
