import React from "react";
import Gallery from "../components/Gallery";
import blobUpper from "../images/wave.svg";
import drone from "../images/drone.png";
import blobLower from "../images/waveLower.svg";

function Homepage() {
  return (
    <>
      <div id="waveBlock">
        <div id="mainPage">
          <h1 id="mainTitle">Pranetra Research and Development</h1>
          <p id="mainPara">
            Our services provide farmers, an efficient yeild producing solutions
            with consultancy and agricultural drones. Customised farming methods
            for induvidual crops and its health status.
          </p>
          <img alt="" id="droneHomePage" src={drone} />
        </div>
        <img src={blobUpper} className="blobUpper" alt="" />
        <div id="blobMiddle"></div>
        <img src={blobLower} alt="" className="blobLower" />
        <Gallery />
      </div>
    </>
  );
}
export default Homepage;
