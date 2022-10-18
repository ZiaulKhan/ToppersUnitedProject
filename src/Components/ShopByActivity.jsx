import React from "react";
import bg from "../Assets/images/shopByActivity/bg.png";
import pic1 from "../Assets/images/shopByActivity/pic1.png";
import pic2 from "../Assets/images/shopByActivity/pic2.png";
import pic3 from "../Assets/images/shopByActivity/pic3.png";
import pic4 from "../Assets/images/shopByActivity/pic4.png";
import pic5 from "../Assets/images/shopByActivity/pic5.png";

export default function ShopByActivity() {
  return (
    <>
      <div className=" shopByItemsDiv text-center w-100">
        <div className="mb-4">
          <p className="shopByItemTitle m-0">Shop by Activity</p>
          <p className="shopByItemTitle2 m-0">
            There is something for everyone.
          </p>
        </div>
        <div className="shopByItems p-0 m-0 text-center">
          <div className="item2 mx-3">
            <p className="shopByActivityText">
              AEROBICS
              <br />& FITNESS
            </p>
            <img className="bg p-0 m-0" src={bg} alt="" />
            <img className="running" src={pic1} alt="" />
          </div>
          <div className="item2 mx-3">
            <p className="shopByActivityText">
              WATER
              <br />
              SPORTS
            </p>
            <img className="bg p-0 m-0" src={bg} alt="" />
            <img className="swmming" src={pic2} alt="" />
          </div>
          <div className="item2 mx-3">
            <p className="shopByActivityText">
              CYCLING
              <br />
              SPORTS
            </p>
            <img className="bg p-0 m-0" src={bg} alt="" />
            <img className="cycling" src={pic3} alt="" />
          </div>
          <div className="item2 mx-3">
            <p className="shopByActivityText">
              GYMNASTICS
              <br />& YOGA
            </p>
            <img className="bg p-0 m-0" src={bg} alt="" />
            <img className="gymnastics" src={pic4} alt="" />
          </div>
          <div className="item2 mx-3">
            <p className="shopByActivityText">
              MARTIAL ARTS
              <br />& BOXING
            </p>
            <img className="bg p-0 m-0" src={bg} alt="" />
            <img className="martialArts" src={pic5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
