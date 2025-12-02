import React from "react";
import "./Contact.css";
// import { FaPhone } from 'react-icons/fa';
const Contact = () => {
  return (
    <>
      <section className="contact-wrapper" id="contact">
        <div className="contact container paddings innerWidth">
          <div className="contact-section flexCenter">
            <h1 className="primaryText">Let's Join Together</h1>
          </div>
          <div className="contact-alignment paddings">
            <div className="contact-label flexCenter">
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="" />
              <div className="contact-button">
                <button className="">Send</button>
              </div>
            </div>
          </div>
          <div className="contact-image-content">
            <div className="contact-image-container">
              <img src="./phonecall.jpg" alt="" />
            </div>
            <div className="some-content paddings innerWidth ">
              <div className="content">
                <p className="flexColStart innerWidth">
                  <span>Have questions or need assistance?</span>
                  <span>
                    Reach out to us anytime, and our team will get back to you
                    as soon as possible.
                  </span>
                  <span className="space">
                    {/* <FaPhone /> */}
                    123-456-7890
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
