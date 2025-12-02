import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper flexCenterStart">
        <div className="main-hero-container flexColStart innerWidth">
          <div className="justify-gap-hero flexColStart innerWidth">
            <div className="hero-contrainer flexColStart paddings innerWidth">
              <div className="hero-heading">
                <h1>
                  Elevate Your
                  <br />
                  Living Experience
                </h1>
              </div>
              <div className="head-paragraph">
                <span className="secondaryText">
                  Discover the latest smart home devices designed to simplify
                  your life, and
                </span>
                <br />
                <span className="secondaryText">
                  {" "}
                  optmize energy efficiency
                </span>
              </div>

              <div className="hero-btns">
                <button className="hero-button">Explore</button>
              </div>
            </div>
            <div className="childof-hero-extra paddings innerWidth ">
              <button className="hero-fout-buttons">Smart</button>
              <button className="hero-fout-buttons">Safe</button>
              <button className="hero-fout-buttons">Secure</button>
              <button className="hero-fout-buttons">Comfort</button>
            </div>
          </div>
          <div className="right-section innerWidth">
            <div className="image-container-hero">
              <img src="./convo.jpg" alt="convo-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
