import React from "react";
import "./intro.css";
import image from "../images/product2.png";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function Intro() {
  return (
    <div>
      <section className="introsection">
        <div className="section">
          <div className="intro">
            <span className="para1">
              Welcome to <br />
            </span>
            <span className="para2">
              Pop Rock Crystal Shop!
              <br />
            </span>
            <p className="para3">
              Here you will find unique phone accessries,
              <br /> crystal,jwelary and more. Free shipping <br /> inside U.S.
              and our phone grips come with
              <br /> a limited warranty. Enjoy!
            </p>
            <button type="button" className="button1">
              SHOP NOW
            </button>
            <button type="button" className="button2">
              about us
            </button>
          </div>
          <div className="block">
            <img className="img" src={image} alt="" />
            <div className="text">
              <span className="para4">CRYSTAL PAGE AGATE</span>
              <div className="grip">
                <span>Grip</span>
                <span className="span1">-18.99$</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
