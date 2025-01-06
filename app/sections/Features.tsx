import FeatureCard from "@/components/features/FeatureCard";
import Image from "next/image";

const Features = () => {
  return (
    <section className="main-container flex flex-col items-center space-y-[60px]">
      <div>
        <h2 className="h2">Our features</h2>
        <p className="p">
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 w-full gap-5 ">
        <FeatureCard icon="icons/flying-saucer.svg" title="Fast Building" />
        <FeatureCard icon="icons/magic-wand.svg" title="Easy To Edit" />
        <FeatureCard icon="icons/bounding-box.svg" title="Responsiveness" />
        <FeatureCard icon="icons/package.svg" title="No Code Needed" />
      </div>
      <Image
        src={"/images/features-mock.png"}
        width={540}
        height={450}
        alt="Features Mock"
        className="max-md:hidden"
      />

      <Image
        src={"/images/features-mock.png"}
        width={360}
        height={267}
        alt="Features Mock"
        className="md:hidden"
      />
    </section>
  );
};

export default Features;
