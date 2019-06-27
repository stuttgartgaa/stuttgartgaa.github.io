import React from "react";
import Header from "../header/Header";

const TrainingHero = () => {
  return (
    <div>
      <Header />
      <div className="hero hero-training">
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
          <h2>Training Info</h2>
          <h3>Beginners Always Welcome!</h3>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
