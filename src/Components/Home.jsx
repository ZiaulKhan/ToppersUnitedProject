import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import GamesYouLove from "./GamesYouLove";
import Header from "./Header/Header";
import LooksYouLove from "./LooksYouLove";
import Promo from "./Promo";
import ShopByActivity from "./ShopByActivity";
import ShopByItems from "./ShopByItems";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="d-flex bg-dark w-100 justify-content-center text-light p-1 deal">
        <p className="m-0 mx-4">
          Free Delivery on orders above RS.1000, DON'T MISS
        </p>
        <button className="btn m-0 p-0 shopNow">
          SHOP NOW <span className="text-light">⇾</span>
        </button>
      </div>
      <Banner />
      <ShopByItems />
      <GamesYouLove />
      <WhatMakesUsDifferent />
      <ShopByActivity />
      <LooksYouLove />
      <Promo />
      <Footer />
    </>
  );
}
