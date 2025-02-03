import React from "react";

import Aboutus from "@/components/aboutus";
import Ca_responsibilities from "@/components/ca_responsibilities";
import Footer from "../../components/Footer";
import FAQ from "@/components/faq";
import WhyCA from "@/components/Incentives&whyCA/WhyCA";
import CampusAmbassadorIncentives from "@/components/Incentives&whyCA/caincentives";
import Nav from "@/components/Nav";
import InteractiveTV from "@/components/ca/TV";

const page = () => {
  return (
    <>
      <Nav />
      <InteractiveTV/>
      <Aboutus />
      <WhyCA />
      <CampusAmbassadorIncentives />
      <Ca_responsibilities />
      <FAQ />
      <Footer />
    </>
  );
};

export default page;
