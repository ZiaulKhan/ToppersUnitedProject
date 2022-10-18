import React from "react";
import social from "../Assets/images/footer/social.png";
import call from "../Assets/images/footer/call.png";
import mail from "../Assets/images/footer/mail.png";
import mappin from "../Assets/images/footer/mappin.png";
import copyright from "../Assets/images/footer/copyright.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerInner my-5 m-0 p-0">
          <div class="footerDiv1">
            <label class="form-label m-0 mb-3">
              Sign Up Today and get
              <br />
              Rs.200 off On your first order.
            </label>
            <input
              className="shadow-none footerInput w-100 p-2 rounded-1"
              type="email"
              class="form-control"
              placeholder="Enter your e-mail"
            />
            <img className="mt-4" src={social} alt="" />
          </div>
          <div className="footerDiv2">
            <div>
              <ul className="list-unstyled">
                <li className="footerHeading">Collection</li>
                <li className="text-secondary footertext">Clothing</li>
                <li className="text-secondary footertext">Tops</li>
                <li className="text-secondary footertext">Sweaters</li>
                <li className="text-secondary footertext">Dresses</li>
                <li className="text-secondary footertext">Shoes</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="footerHeading">Company</li>
                <li className="text-secondary footertext">
                  Careers at Toppers
                </li>
                <li className="text-secondary footertext">About Toppers</li>
                <li className="text-secondary footertext">Contact Us</li>
                <li className="text-secondary footertext">Gift Card</li>
                <li className="text-secondary footertext">Blog</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="footerHeading">Need Help</li>
                <li className="text-secondary footertext">Order Status</li>
                <li className="text-secondary footertext">
                  Shipping & Delivery
                </li>
                <li className="text-secondary footertext">FAQ & Helps</li>
                <li className="text-secondary footertext">
                  Terms & Conditions
                </li>
                <li className="text-secondary footertext">Legal & Privacy</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="footerHeading">Exclusive Services</li>
                <li className="text-secondary footertext">
                  <img src={call} alt="" /> Call Us: +1 666 8888
                </li>
                <li className="text-secondary footertext">
                  <img src={mail} alt="" /> Send us an email
                </li>
                <li className="text-secondary footertext">
                  <img src={mappin} alt="" /> See our stores
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBottom text-light w-75">
            <hr className="m-0 p-0 mb-1 border-2 border-top border-light" />
            <img src={copyright} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
