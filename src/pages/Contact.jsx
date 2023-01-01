import React from "react";
import header from "../images/contactPage1.png";
import Footer from "../components/Footer";
import phoneIcon from "../images/icons/phone.svg";
import data from "../data.js";

function Contact() {
  return (
    <>
      <div id="contactPageHeader">
        <img src={header} alt="header" />
        <p>
          <span>How </span>
          <span>can </span>
          <span>we </span>
          <span style={{ color: "rgb(4, 255, 255)" }}>help </span>
          <span>you?</span>
        </p>
      </div>

      <div id="ContactMeBlock">
        <div id="phoneUs">
          <img src={phoneIcon} alt="phone" />
          <p style={{ fontSize: "2rem", color: "rgb(0, 142, 142)" }}>
            {data.phoneNo1}
          </p>
          <p style={{ fontSize: "2rem", color: "rgb(0, 142, 142)" }}>
            {data.phoneNo2}
          </p>
          <p id="contactText" style={{ textAlign: "left" }}>
            We're available 24/7 to help you with our service. Contact us
            through call or mail us your queries at{" "}
            <a
              href={"mailto:" + data.email}
              style={{ color: "rgb(0, 142, 142)" }}
            >
              {data.email}
            </a>
            . Either way, we’d love to talk.
          </p>
        </div>
        <div id="messageUs">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label>Name</label>
            <input style={{ height: "6vh" }} />

            <label>Phone No.</label>
            <input style={{ height: "6vh" }} />

            <label>Message</label>
            <textarea style={{ height: "18vh" }} />
            <button className="button" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
