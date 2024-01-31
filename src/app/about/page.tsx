import Hero from "@/components/ui/Hero";
import { Image } from "antd";
import React from "react";

import FooterComponent from "@/components/ui/FooterComponent";

const AboutPage = () => {
  return (
    <div>
      <Hero text={"About Us"} />

      <FooterComponent />
    </div>
  );
};

export default AboutPage;
