import React from "react";
import Topnav from "./Topnav";
import logo from "../../Assets/images/Logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="d-flex mx-5 header">
        <div className="logo my-2">
          <img src={logo} alt="" />
        </div>
        <div className="mx-5 w-100">
          <Topnav />
          <Nav />
        </div>
      </div>
    </>
  );
}
