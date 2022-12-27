import React from "react";
import Footer from "../components/Footer";
import ServicePage from "../components/ServicePage";
import Gallery from "../components/Gallery";
import PastCustomers from "../components/PastCustomers";

function Service() {
  return (
    <>
      <ServicePage />
      <Gallery />
      <PastCustomers />
      <Footer />
    </>
  );
}

export default Service;
