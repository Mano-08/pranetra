import React from "react";
import logo from "../images/logo.svg";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = React.useState(false);
  const [active, updateStatus] = React.useState("");
  function handleClick() {
    state ? setState(false) : setState(true);
  }
  function setActive(event) {
    updateStatus(event.target.parentNode.id);
  }
  return (
    <>
      <nav style={{ backgroundColor: "#1b0a01ad" }}>
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
          <li
            className={active === "about-us" ? "navLink activePage" : "navLink"}
          >
            <Link
              className="link"
              id="about-us"
              onClick={(handleClick, setActive)}
              to="/"
            >
              About Us
            </Link>
          </li>

          <li
            className={active === "services" ? "navLink activePage" : "navLink"}
          >
            <Link
              className="link"
              onClick={(handleClick, setActive)}
              to="/services"
              id="services"
            >
              Services
            </Link>
          </li>

          <li className={active === "faqs" ? "navLink activePage" : "navLink"}>
            <Link
              className="link"
              onClick={(handleClick, setActive)}
              to="/faqs"
              id="faqs"
            >
              FAQS
            </Link>
          </li>

          <li
            className={active === "contact" ? "navLink activePage" : "navLink"}
          >
            <Link
              className="link"
              onClick={(handleClick, setActive)}
              to="/contact"
              id="contact"
            >
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
