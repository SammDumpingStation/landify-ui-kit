import companyLogos from "@/lib/company-logos";
import Image from "next/image";

const LogoBar = () => {
  return (
    <section className="border-y py-[48px] px-[30px] flex flex-wrap gap-x-[52px] gap-y-[26px] items-center justify-center">
      {companyLogos.fullLogos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.logo}
          width={70}
          height={22}
          alt={`${logo.companyName} Full Logo`}
          className=""
        />
      ))}
    </section>
  );
};

export default LogoBar;
