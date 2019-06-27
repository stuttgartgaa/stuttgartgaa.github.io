import React from "react";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="hero hero-contact">
        <div className="hero-inner">
          <h2>Drop Us a Message</h2>
          <h3>We would love to hear from you!</h3>
          <a
            className="contact-social-link"
            href="https://www.facebook.com/StuttgartGAA/"
            target="_blank"
            rel="noopener noreferrer"
            title="Stuttgart GAA Facebook Page"
          >
            <i className="fa fa-facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
