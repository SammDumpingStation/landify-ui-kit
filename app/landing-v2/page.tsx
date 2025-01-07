import React from "react";
import Hero from "./sections/Hero";
import LogoBar from "./sections/LogoBar";
import Features from "./sections/Features";

const Home = () => {
  return (
    <main className="min-h-[100vh]">
      <Hero />
      <LogoBar />
      <Features />
    </main>
  );
};

export default Home;
