import React from "react";
import bg1 from "../Assets/images/shopByItems/bg1.png";
import bg2 from "../Assets/images/shopByItems/bg2.png";
import bag from "../Assets/images/shopByItems/bag.png";
import ball from "../Assets/images/shopByItems/ball.png";
import bottle from "../Assets/images/shopByItems/bottle.png";
import gloves from "../Assets/images/shopByItems/gloves.png";
import shoes from "../Assets/images/shopByItems/shoes.png";
import socks from "../Assets/images/shopByItems/socks.png";
import left from "../Assets/images/shopByItems/left.png";
import right from "../Assets/images/shopByItems/right.png";
import circle from "../Assets/images/shopByItems/circle.png";

export default function ShopByItems() {
  return (
    <>
      <div className=" shopByItemsDiv text-center w-100">
        <p className="shopByItemTitle m-0">Shop by Items</p>
        <p className="shopByItemTitle2 m-0">Your Game. Your Rules</p>
        <div className="shopByItems p-0 m-0 ">
          <div className="leftBtn">
            <img className="leftArrow" src={left} alt="" />
            <img src={circle} alt="" />
          </div>
          <div className="item">
            <img className="shoes" src={shoes} alt="" />
            <img className="bg1 p-0 m-0" src={bg1} alt="" />
          </div>
          <div className="item ">
            <img className="bottle" src={bottle} alt="" />
            <img className="bg2 p-0 m-0" src={bg2} alt="" />
          </div>
          <div className="item ">
            <img className="bag" src={bag} alt="" />
            <img className="bg1 p-0 m-0" src={bg1} alt="" />
          </div>
          <div className="item ">
            <img className="gloves" src={gloves} alt="" />
            <img className="bg2 p-0 m-0" src={bg2} alt="" />
          </div>
          <div className="item ">
            <img className="socks" src={socks} alt="" />
            <img className="bg1 p-0 m-0" src={bg1} alt="" />
          </div>
          <div className="item ">
            <img className="ball" src={ball} alt="" />
            <img className="bg2 p-0 m-0" src={bg2} alt="" />
          </div>
          <div className="rightBtn">
            <img className="rightArrow" src={right} alt="" />
            <img src={circle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
