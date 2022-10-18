import React from "react";
import icon1 from "../Assets/images/whatMakesUsDifferent/icon1.png";
import icon2 from "../Assets/images/whatMakesUsDifferent/icon2.png";
import icon3 from "../Assets/images/whatMakesUsDifferent/icon3.png";

export default function WhatMakesUsDifferent() {
  return (
    <>
      <div className="whatMakesUsDifferentDiv text-center w-100">
        <div className="whatMakesUsDifferentContent">
          <p className="shopByItemTitle m-0">What Makes Us Different</p>
          <p className="shopByItemTitle2 m-0">
            Helping people manage anxiety, pain, and sleeplessness.
          </p>
          <div className="d-flex mt-3  w-100 justify-content-center">
            <div className="mx-4 w-25">
              <img src={icon1} alt="" />
              <h4 style={{ fontFamily: "DM Sans", fontWeight: "bold" }}>
                Locally
                <br />
                Sourced
              </h4>
              <p className="text-secondary" style={{ fontFamily: "Work Sans" }}>
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
            <div className="mx-4 w-25">
              <img src={icon2} alt="" />
              <h4 style={{ fontFamily: "DM Sans", fontWeight: "bold" }}>
                100%
                <br />
                Sustainable Fabric
              </h4>
              <p className="text-secondary" style={{ fontFamily: "Work Sans" }}>
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
            <div className="mx-4 w-25">
              <img src={icon3} alt="" />
              <h4 style={{ fontFamily: "DM Sans", fontWeight: "bold" }}>
                Best Of The
                <br />
                Class Material
              </h4>
              <p className="text-secondary" style={{ fontFamily: "Work Sans" }}>
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
