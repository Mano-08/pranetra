import React from "react";
import logo from "../images/logo.svg";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = React.useState(false);
  const [active, setActive] = React.useState(() => {
    var loc = window.location.pathname;
    if (loc === "/") {
      return "aboutUs-link";
    } else {
      loc = loc.slice(1, loc.length);
      return loc + "-link";
    }
  });

  function handleClick(e) {
    state ? setState(false) : setState(true);
    setActive(e.target.parentNode.id);
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
          <li
            id="aboutUs-link"
            className={active === "aboutUs-link" ? "activePage" : ""}
          >
            <Link className="link" onClick={handleClick} to="/">
              About Us
            </Link>
          </li>

          <li
            id="faqs-link"
            className={active === "faqs-link" ? "activePage" : ""}
          >
            <Link className="link" onClick={handleClick} to="/faqs">
              FAQS
            </Link>
          </li>

          <li
            id="contact-link"
            className={active === "contact-link" ? "activePage" : ""}
          >
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
