import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-secondary-s1 min-h-[10vh] !pt-[100px] !pb-0 main-container flex flex-col items-center gap-16 w-full">
      <div className="space-y-10">
        <div className="space-y-5">
          <h1 className="h1">Create Engaging Landing Pages</h1>
          <p className="lead">
            Build beautiful landing pages in record time with Anima's Landing
            Page UI kit for Figma. No code required!
          </p>
        </div>
        <div className="flex flex-col w-full items-center gap-5">
          <PrimaryButton title="Get Started" rocket />
          <PrimaryButton title="How it Works" variant="outline" />
        </div>
      </div>
      <Image
        src={"/images/hero-mockup.png"}
        width={315}
        height={315}
        alt="Mockup"
        className="md:hidden"
      />
      <Image
        src={"/images/hero-mockup.png"}
        width={450}
        height={450}
        alt="Mockup"
        className="max-md:hidden"
      />
    </section>
  );
};

export default Hero;
