import Workshop from "@/components/ca/loading";
import Spline from "@/components/herosection/spline"
// import Footer from "@/components/Footer";
import Ca_responsibilities from "@/components/ca_responsibilities";
import CampusAmbassadorIncentives from "../components/Incentives&whyCA/caincentives";
import WhyCA from "@/components/Incentives&whyCA/WhyCA";
import Loader from "@/components/ca/loading";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar/>
      <Spline />
    <Loader/>
    </>
  );
}
