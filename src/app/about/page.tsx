import Hero from "@/components/ui/Hero";
import { Image } from "antd";
import React from "react";
import AboutPhoto from "../../assects/about_img.png";
import FooterComponent from "@/components/ui/FooterComponent";
import Servey from "@/components/ui/Servey";

const AboutPage = () => {
  return (
    <div>
      <Hero text={"About Us"} />
      <div className="max-w-7xl mx-auto my-8">
        <div className="grid md:grid-cols-2 gap-4 justify-center mx-3 mt-12 items-center">
          <div>
            <h2>At A Glance</h2>
            <p className="text-slate-500 font-mono text-xl">
              Starting back in 2016, Bproperty has now become the only real
              estate solutions provider in Bangladesh and its largest
              transacting real estate company. Combining an unmatched online and
              offline presence with our incomparable database of information,
              Bproperty has become the pioneer that caters to the needs of those
              with real estate queries, whether property search or
              customization, providing supporting services such as legal,
              mortgage, and interior to ensure all solutions are under one roof.
              Bproperty utilizes technology to drive solutions for all
              stakeholders within the real estate industry with the vision to
              ensure that all Bangladeshis have access to a trusted and secure
              real estate service provider.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              className="rounded-xl"
              src={AboutPhoto.src}
              alt="aboutPhoto"
            />
          </div>
        </div>
        <div className="text-center mt-8 rounded-t-md mt-8 pt-8 bg-gray-100">
          <h2>Our Mission</h2>
          <p className="font-mono">
            Continuously serving people with whatever they need to make the
            right decisions to retain confidence in real-estate.
          </p>
        </div>
        <div className="text-center rounded-b-md  pt-8 bg-gray-100 pb-8">
          <h2>Our Vision</h2>
          <p className="font-mono">
            To be the household name for property services among Bangladeshis
            around the world.
          </p>
        </div>
        <Servey />
      </div>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
