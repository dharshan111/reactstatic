import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="header-wrapper flexcenterStart">
        <div className="header-container flexCenterStart paddings innerWidth">

          <div className="header-navigation">
            
          
            <div className="header-logo">
              <h2 className="header-tag">Here!</h2>
            </div>

          
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Menu Items */}
            <div className={`header-path ${isOpen ? "open" : ""}`}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Products</a>
              <a href="">Testimonials</a>
              <a href="">Contacts</a>
            </div>

            <div className="header-section-end">
              <button className="buy-button">BUY NOW</button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Header;
