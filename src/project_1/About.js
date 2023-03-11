import React from "react";
import Img from "../Images/img9.png";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page "
        imgsrc={Img}
        visit="/contact"
        btnname="Contact now"
      />
    </>
  );
};

export default About;