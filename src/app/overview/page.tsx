import Hero from "@/components/ui/Hero";
import React from "react";
import FooterComponent from "@/components/ui/FooterComponent";
import Overview from "@/components/ui/Overview";

const AboutPage = () => {
  return (
    <div>
      <Hero>
        <h1 className="text-teal-900">Overviews</h1>
      </Hero>
      <Overview />
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
