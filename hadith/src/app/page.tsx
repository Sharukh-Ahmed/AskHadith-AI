import Image from "next/image";
import Display from "./components/display";
import LandingPage from "./components/landingPage";

export default function Home() {

  return (
    <div className="flex justify-center items-center m-h-screen">
      {/* <Display /> */}
      <LandingPage/>
    </div>
  );
}
