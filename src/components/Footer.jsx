import React from "react";
import sun from "../images/icons/sun.png";
import linkedin from "../images/icons/linkedin.svg";
import twitter from "../images/icons/twitter.svg";
import facebook from "../images/icons/fb.svg";
import instagram from "../images/icons/instagram.svg";
import { Link } from "react-router-dom";
import data from "../data";

function Footer() {
  return (
    <footer id="footer">
      <section id="footerSec1">
        <img src={sun} alt="" />
        <p
          style={{
            fontSize: "2rem",
            color: "rgb(229, 229, 229)",
          }}
        >
          Pranetra
        </p>
        <p>
          Pioneering drone fertilizer application that improves speed, reduces
          wastage - all along with minimal service price.
        </p>
      </section>
      <section id="footerSec2">
        <p
          style={{
            fontSize: "1.3rem",
            paddingBottom: "3vh",
            color: "rgb(229, 229, 229)",
          }}
        >
          Contact Us
        </p>
        <ul>
          <a
            style={{ textDecoration: "none", color: "grey" }}
            href={"tel:" + data.phoneNo1}
          >
            <li>{data.phoneNo1}</li>
          </a>
          <a
            style={{ textDecoration: "none", color: "grey" }}
            href={"tel:" + data.phoneNo2}
          >
            <li>{data.phoneNo2}</li>
          </a>
          <li>
            <a href={"mailto:" + data.email}>{data.email}</a>
          </li>
        </ul>
      </section>
      <section id="footerSec3">
        <p
          style={{
            fontSize: "1.3rem",
            paddingBottom: "3vh",
            color: "rgb(229, 229, 229)",
          }}
        >
          Help
        </p>
        <ul>
          <li>
            <Link to="/faqs">FAQS</Link>
          </li>
          <li>
            <Link to="/contact">Gallery</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </section>
      <section id="footerSec4">
        <p
          style={{
            fontSize: "1.3rem",
            paddingBottom: "3vh",
            color: "rgb(229, 229, 229)",
          }}
        >
          Socials
        </p>
        <ul>
          <li>
            <a href="https://in.linkedin.com/">
              <img alt="" src={linkedin} /> Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img alt="" src={twitter} /> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img alt="" src={instagram} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img alt="" src={facebook} /> FaceBook
            </a>
          </li>
        </ul>
      </section>
      <p id="copyright">
        © 2023, Pranetra Research Pvt. Ltd. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
