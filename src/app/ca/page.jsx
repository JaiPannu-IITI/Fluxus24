import React from "react";

import AboutUs from "@/components/aboutUs";
import Ca_responsibilities from "@/components/ca_responsibilities";
import Footer from "../../components/Footer";
import FAQ from "@/components/faq";
import WhyCA from "@/components/Incentives&whyCA/WhyCA";
import CampusAmbassadorIncentives from "@/components/Incentives&whyCA/caincentives";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <AboutUs />
      <WhyCA />
      <CampusAmbassadorIncentives />
      <Ca_responsibilities />
      <FAQ />
      <Footer />
    </>
  );
};

export default page;
