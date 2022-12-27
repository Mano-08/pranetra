import React from "react";
import farmer from "../images/homePage.jpg";

function Homepage() {
  return (
    <>
      <img id="farmerImg" alt="farmer" src={farmer}></img>
      <div id="block"></div>
    </>
  );
}
export default Homepage;
