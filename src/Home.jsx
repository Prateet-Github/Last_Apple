import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Hero2 } from "./Components/Hero2";
import { Hero3 } from "./Components/Hero3";
import { Footer } from "./Components/Footer";
import  Glbv  from "./Components/Glbv";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Glbv></Glbv>
      <Footer></Footer>
    </div>
  );
};
