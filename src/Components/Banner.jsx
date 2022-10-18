import React from "react";
import bannerImg from "../Assets/images/sportsBanner.png";
// import bannerText from "";

export default function Banner() {
  return (
    <>
      <div className="bannerImg w-100">
        <div className="bannerText1">
          <p className=" text-light">
            Play the game.
            <br />
            Your rules.
            <span className="text-danger"> Your way</span>
          </p>
        </div>
        <div className="bannerText2">
          Made to fit school unifroms that give you the edge
        </div>
        <button className="btn border rounded bannerBtn">EXPLORE NOW</button>
        <img src={bannerImg} width="100%" alt="" />
      </div>
    </>
  );
}
