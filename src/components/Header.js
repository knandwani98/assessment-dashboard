import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import ScreenContext from "../context/ScreenContext";

const Header = () => {
  const { toggleMenu, setToggleMenu } = useContext(ScreenContext);

  return (
    <header className="top-header flex container">
      <nav className="nav">
        <ul className="flex">
          <button
            className="toggle-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="icon">
              <img src="../assets/svg/menu.svg" alt="" />
            </span>
          </button>
          <li>
            <Link className={"link"} to="/">
              Assessment
            </Link>
          </li>

          <span className="divider"></span>

          <li className="nav-link active">
            <Link className={"link"} to="/">
              My Assessment
            </Link>
          </li>
        </ul>
      </nav>

      <button className="toggle-screen">
        <span id="mobile" className="icon">
          <img src="../assets/svg/mobile.svg" alt="switch to mobile icon" />
        </span>
        <span id="laptop" className="icon">
          <img src="../assets/svg/laptop.svg" alt="switch to mobile icon" />
        </span>
      </button>
    </header>
  );
};

export default Header;
