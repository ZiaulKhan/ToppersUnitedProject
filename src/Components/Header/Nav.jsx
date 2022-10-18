import React from "react";
import navIcons from "../../Assets/images/navIcons.png";
import cartCount from "../../Assets/images/cartCount.png";

export default function Nav() {
  return (
    <>
      <div className="d-flex justify-content-between mt-2">
        <nav className="navbar navbar-expand fw-bold w-100">
          <div
            className="navbar-nav  d-flex justify-content-between"
            style={{ width: "500px" }}
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                School Uniforms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Corporate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger  active" href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
          </div>
        </nav>
        <div className="navbar">
          <img className="cartCount" src={cartCount} alt="" />
          <img src={navIcons} alt="" />
        </div>
      </div>
    </>
  );
}
