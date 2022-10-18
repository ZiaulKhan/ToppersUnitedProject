import React from "react";
import bg1 from "../Assets/images/looksYouLove/bg1.png";
import bg2 from "../Assets/images/looksYouLove/bg2.png";
import bg3 from "../Assets/images/looksYouLove/bg3.png";
import bg4 from "../Assets/images/looksYouLove/bg4.png";
import star from "../Assets/images/looksYouLove/star.png";
import bg from "../Assets/images/looksYouLove/bg.png";
import heart from "../Assets/images/looksYouLove/heart.png";
import arrows from "../Assets/images/looksYouLove/arrows.png";
import eye from "../Assets/images/looksYouLove/eye.png";
import view from "../Assets/images/looksYouLove/view.png";

export default function LooksYouLove() {
  return (
    <>
      <div className=" shopByItemsDiv text-center w-100 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <div className="w-100 text-center">
            <p className="shopByItemTitle m-0">Looks You'll Love</p>
            <p className="shopByItemTitle2 m-0">Top sale this week</p>
          </div>
        </div>
        <div className="d-flex justify-content-center text-start">
          <div>
            <div>
              <div className="imgTags text-center">
                <p className="new px-2 mb-2">NEW</p>
                <p className="discount m-0">-25%</p>
              </div>
              <img src={bg1} width="250px" className="mx-2" alt="" />
            </div>
            <div className="mt-3 mx-2">
              <p className="looks m-0 p-0">Combo Tennis Shorts & Tee</p>
              <p className="looks text-danger m-0 p-0">
                Rs.1,600
                <del className="delPrice text-secondary mx-2"> Rs.1,800</del>
              </p>
              <div className="d-flex">
                <img className="m-0 p-0 mb-5 mt-1" src={star} alt="" />
                <p className="m-0 p-0 reviews mx-2 text-secondary">
                  (1,234 reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="imgTags text-center">
              <p className="discount m-0 px-2">-25%</p>
            </div>
            <img className="viewText" src={view} alt="" />
            <div className="menu">
              <img className="heart" src={heart} alt="" />
              <div className="eyeDiv">
                <img className="eye" src={eye} alt="" />
                <img className="bgMenu" src={bg} alt="" />
              </div>
              <div className="eyeDiv">
                <img className="eye" src={arrows} alt="" />
                <img className="bgMenu" src={bg} alt="" />
              </div>
            </div>
            <button className="myBtn w-100 p-1">Add To Cart</button>
            <img src={bg2} width="250px" className="mx-2" alt="" />
            <div className="mt-3 mx-2">
              <p className="looks m-0 p-0">Universal Sports Cap</p>
              <p className="looks text-danger m-0 p-0">
                Rs.1,600
                <del className="delPrice text-secondary mx-2"> Rs.1,800</del>
              </p>
              <div className="d-flex ">
                <img className="m-0 p-0 mb-5 mt-1" src={star} alt="" />
                <p className="m-0 p-0 reviews mx-2 text-secondary">
                  (1,234 reviews)
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={bg3} width="250px" className="mx-2" alt="" />
            <div className="mt-3 mx-2">
              <p className="looks m-0 p-0">Training Max Shoes</p>
              <p className="looks text-danger m-0 p-0">
                Rs.1,600
                <del className="delPrice text-secondary mx-2"> Rs.1,800</del>
              </p>
              <div className="d-flex">
                <img className="m-0 p-0 mb-5 mt-1" src={star} alt="" />
                <p className="m-0 p-0 reviews mx-2 text-secondary">
                  (1,234 reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <img className="viewText" src={view} alt="" />
            <div className="menu">
              <img className="heart" src={heart} alt="" />
              <div className="eyeDiv">
                <img className="eye" src={eye} alt="" />
                <img className="bgMenu" src={bg} alt="" />
              </div>
              <div className="eyeDiv">
                <img className="eye" src={arrows} alt="" />
                <img className="bgMenu" src={bg} alt="" />
              </div>
            </div>
            <button className="myBtn w-100 p-1">Add To Cart</button>
            <img src={bg4} width="250px" className="mx-2" alt="" />
            <div className="mt-3 mx-2">
              <p className="looks m-0 p-0">Women Long Blazer</p>
              <p className="looks text-danger m-0 p-0">
                Rs.1,600
                <del className="delPrice text-secondary mx-2"> Rs.1,800</del>
              </p>
              <div className="d-flex">
                <img className="m-0 p-0 mb-5 mt-1" src={star} alt="" />
                <p className="m-0 p-0 reviews mx-2 text-secondary">
                  (1,234 reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
