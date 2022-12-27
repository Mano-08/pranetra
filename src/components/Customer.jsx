import React from "react";
import quotesImg from "../images/icons/quotes.png";

function Customer(props) {
  return (
    <div>
      <section className="colorBlock"></section>
      <img alt="" src={require("../images/background2.jpg").default} />
      <section className="reviewTextBlock">
        <p className="reviewText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </section>
      <section>
        <img className="quotesImg" src={quotesImg} alt="" />
        <p className="clientName"></p>
      </section>
    </div>
  );
}
export default Customer;
