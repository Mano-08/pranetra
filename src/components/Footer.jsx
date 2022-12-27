import React from "react";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer>
      <div id="companyName">
        <img id="companyLogo" alt="Pranetra_logo" src={logo} />
        <p>Prantera Research and Development Private Limited</p>
      </div>
      <p id="copyright">Copyright @ Pranetra Research 2023</p>
    </footer>
  );
}

export default Footer;
