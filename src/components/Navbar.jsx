import React from "react";
import logo from "../images/logo.svg";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = React.useState(false);
  function handleClick() {
    state ? setState(false) : setState(true);
  }
  return (
    <>
      <nav>
        <a id="logoNavBar" href="https://www.amazon.com">
          <img alt="Pranetra_Logo" src={logo} />
        </a>
        <div id="mobile">
          <i
            onClick={handleClick}
            className={state ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
          <li>
            <Link className="link" onClick={handleClick} to="/">
              About Us
            </Link>
          </li>

          <li>
            <Link className="link" onClick={handleClick} to="/services">
              Services
            </Link>
          </li>

          <li>
            <Link className="link" onClick={handleClick} to="/faqs">
              FAQS
            </Link>
          </li>

          <li>
            <Link className="link" onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
