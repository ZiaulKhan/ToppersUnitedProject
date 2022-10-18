import React from "react";

export default function Topnav() {
  return (
    <div className="d-flex ">
      <div className="dropdown">
        <button
          className="btn btn-sm text-secondary outline-0 border-0 dropdown-toggle topnavFont"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          English
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown mx-2">
        <button
          className="btn btn-sm text-secondary outline-0 border-0 dropdown-toggle topnavFont"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          USD
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
