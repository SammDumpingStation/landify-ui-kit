import Hero from "./sections/Hero";
import Features from "./sections/Features";
import SelectedWorks from "./sections/SelectedWorks";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import Integrations from "./sections/Integrations";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-[100vh]">
      <Hero />
      <Features />
      <SelectedWorks />
      <Testimonials />
      <Team />
      <Integrations />
      <Footer />
    </main>
  );
}
