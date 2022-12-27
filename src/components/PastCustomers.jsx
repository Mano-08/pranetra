import React from "react";
import Customer from "./Customer";

function PastCustomers() {
  return (
    <div id="PastCustomers">
      <p className="sideHeading">What do our clients say?</p>
      <div>
        <Customer />
      </div>
    </div>
  );
}

export default PastCustomers;
