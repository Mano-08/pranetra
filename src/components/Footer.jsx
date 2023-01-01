import React from "react";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer>
      <div id="companyName">
        <img id="companyLogo" alt="Pranetra_logo" src={logo} />
        <p>Prantera Research and Development Private Limited</p>
      </div>

      <div
        id="footerLinks"
        style={{ color: "grey", display: "flex", flexDirection: "row" }}
      >
        <ul>
          <p style={{ fontSize: "1rem" }}>Socials</p>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>FaceBook</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <p style={{ fontSize: "1rem" }}>Navigate</p>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>FaceBook</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <p style={{ fontSize: "1rem" }}>Contact Us</p>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>FaceBook</li>
          <li>Instagram</li>
        </ul>
      </div>
      <p id="copyright">Copyright @ Pranetra Research 2023</p>
    </footer>
  );
}

export default Footer;
