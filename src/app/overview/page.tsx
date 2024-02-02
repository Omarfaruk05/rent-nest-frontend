import Hero from "@/components/ui/Hero";
import React from "react";
import FooterComponent from "@/components/ui/FooterComponent";
import Overview from "@/components/ui/Overview";

const AboutPage = () => {
  return (
    <div>
      <Hero>
        <h1 className="text-5xl text-slate-800">Overviews</h1>
      </Hero>
      <Overview />
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
