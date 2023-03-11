import React from "react";
import Web from "../Images/img2.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={Web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;