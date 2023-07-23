import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="top-header flex container">
      <nav className="nav">
        <ul className="flex">
          <li>
            <Link className={"link"} to="/">
              Assessment
            </Link>
          </li>

          <span className="divider"></span>

          <li className="active">
            <Link className={"link"} to="/">
              My Assessment
            </Link>
          </li>
        </ul>
      </nav>

      <button className="toggle-screen">
        <img src="../assets/svg/mobile.svg" alt="switch to mobile icon" />
      </button>
    </header>
  );
};

export default Header;
