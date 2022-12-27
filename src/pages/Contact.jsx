import React from "react";
import header from "../images/contactPage1.png";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div id="contact">
      <div id="contactPageHeader">
        <img src={header} alt="header" />
        <p>
          How can we <span id="help">help</span> you?
        </p>
      </div>

      <div id="ContactMeBlock">
        <ContactMe />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
