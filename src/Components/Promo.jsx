import React from "react";
import promo1 from "../Assets/images/promo/promo1.png";
import promo2 from "../Assets/images/promo/promo2.png";
// import kids1 from "../Assets/images/promo/kids1.png";
// import kids2 from "../Assets/images/promo/kids2.png";

export default function Promo() {
  return (
    <>
      <div className="promoDiv w-100">
        <div className="promo1 mx-4">
          <img
            className="rounded"
            width="500px"
            height="230px"
            src={promo1}
            alt=""
          />
        </div>
        <div className="promo2 mx-4">
          <img
            className="rounded"
            width="500px"
            height="230px"
            src={promo2}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
