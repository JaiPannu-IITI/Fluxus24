import Workshop from "@/app/workshop/page";
import Spline from "@/components/herosection/spline"
// import Footer from "@/components/Footer";
import Ca_responsibilities from "@/components/ca_responsibilities";
import CampusAmbassadorIncentives from "../components/Incentives&whyCA/caincentives";
import WhyCA from "@/components/Incentives&whyCA/WhyCA";

export default function Home() {
  return (
    <>
      <Spline />
      <WhyCA />
      <CampusAmbassadorIncentives />
    </>
  );
}
