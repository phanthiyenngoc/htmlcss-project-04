import React from "react";
import Banner from "../components/page/Home/Banner";
import LogoSection from "../components/page/Home/LogoSection";
import Services from "../components/page/Home/Services";
import About from "../components/page/Home/About";
import Prossess from "../components/page/Home/Proccess";
import Feature from "../components/page/Home/Features";
import ServiceFeatures from "../components/page/Home/ServiceFeatures";
import Blog from "../components/page/Home/Blog";
const Home = () => {
  return (
    <div>
      <Banner />
      <LogoSection />
      <Services />
      <About />
      <Prossess />
      <Feature />
      <ServiceFeatures />
      <Blog />
    </div>
  );
};

export default Home;
