import React from "react";
import background from "../images/background2.jpg";
import drone from "../images/drone2.png";
import layout from "../images/layout.jpg";

function ServicePage() {
  return (
    <>
      <div id="partitionBlock"></div>
      <div className="service_page">
        <img alt="background" id="serviceImg" src={background} />
        <div id="serviceInfo" style={{ backgroundImage: layout }}>
          <img alt="Drone_imgage" id="drone-img" src={drone} />
          <p id="serviceText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
          </p>
        </div>
        <div id="shadowBlock"></div>
      </div>
    </>
  );
}

export default ServicePage;
