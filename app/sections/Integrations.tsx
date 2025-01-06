import PrimaryButton from "@/components/shared/PrimaryButton";
import companyLogos from "@/lib/company-logos";
import Image from "next/image";
import React from "react";
const Integrations = () => {
  return (
    <section className="main-container">
      <div>
        <h1 className="h2">More than 50 Integrations</h1>
        <p className="lead">
          We integrate with more than 50 apps you use daily
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="logo-container">
          {companyLogos.logos.slice(0, 6).map((logo) => (
            <Image
              key={logo.id}
              src={logo.logo}
              width={40}
              height={40}
              alt={`${logo.companyName} Logo`}
            />
          ))}
        </div>
        <div className="logo-container">
          {companyLogos.logos.slice(6, 11).map((logo) => (
            <Image
              key={logo.id}
              src={logo.logo}
              width={40}
              height={40}
              alt={`${logo.companyName} Logo`}
            />
          ))}
        </div>
        <div className="logo-container">
          {companyLogos.logos.slice(12, 16).map((logo) => (
            <Image
              key={logo.id}
              src={logo.logo}
              width={40}
              height={40}
              alt={`${logo.companyName} Logo`}
            />
          ))}
        </div>
      </div>
      <PrimaryButton title="View All Integrations" arrow={false} />
    </section>
  );
};

export default Integrations;
