import React from "react";
import basketball from "../Assets/images/gamesYouLove/basketball.png";
import punching from "../Assets/images/gamesYouLove/punching.png";
import cricket from "../Assets/images/gamesYouLove/cricket.png";
import soccer from "../Assets/images/gamesYouLove/soccer.png";
import left from "../Assets/images/shopByItems/left.png";
import right from "../Assets/images/shopByItems/right.png";
import circle from "../Assets/images/shopByItems/circle.png";

export default function GamesYouLove() {
  return (
    <>
      <div className=" shopByItemsDiv text-center w-100 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <div className="leftBtn2 mx-auto">
            <img className="leftArrow" src={left} alt="" />
            <img src={circle} alt="" />
          </div>
          <div>
            <p className="shopByItemTitle m-0">Games You Love</p>
            <p className="shopByItemTitle2 m-0">Top sale this week</p>
          </div>
          <div className="rightBtn2 mx-auto">
            <img className="rightArrow" src={right} alt="" />
            <img src={circle} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center text-start">
          <div>
            <img src={basketball} width="250px" className="mx-2" alt="" />
            <p className="games">Basketball</p>
          </div>
          <div>
            <img src={punching} width="250px" className="mx-2" alt="" />
            <p className="games">Boxing</p>
          </div>
          <div>
            <img src={cricket} width="250px" className="mx-2" alt="" />
            <p className="games">Cricket</p>
          </div>
          <div>
            <img src={soccer} width="250px" className="mx-2" alt="" />
            <p className="games">Soccer</p>
          </div>
        </div>
      </div>
    </>
  );
}
