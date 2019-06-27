import React from "react";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="hero hero-about">
        <a
          className="social-link"
          href="https://www.facebook.com/StuttgartGAA/"
          target="_blank"
          rel="noopener noreferrer"
          title="Stuttgart GAA Facebook Page"
        >
          <i className="fa fa-facebook" />
        </a>
        <div className="hero-inner">
          <h2>About Our Club</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
