import Image from "next/image";
import Display from "./components/display";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center m-h-screen">
      <Navbar/>
      {/* <Display /> */}
      <LandingPage/>
    </div>
  );
}
