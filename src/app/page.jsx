import Image from "next/image";
import Navbar from "./components/Navbar";
import Workshop from "./Pages/Workshop/Workshop";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Workshop/>
    </>
  );
}
