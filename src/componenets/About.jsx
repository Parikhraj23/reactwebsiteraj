import React from "react";
import aboutImg from "../Images/about page.jpg";
import Comman from "./ExtraComponents/Comman";

const About = () => {
  return (
    <>
      <Comman
        name="About"
        imgsrc={aboutImg}
        message="We Mould your Life and Help you to Achieve your Dream Life."
        visits="/contact"
        btnName="Contact us"
      />
    </>
  );
};

export default About;
