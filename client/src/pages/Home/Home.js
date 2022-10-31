import React from "react";
import CallToAction from "./CallToAction";
import Featured from "./Featured";
import Hero from "./Hero";
import Products from "./Products";

const Home = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Hero />
        <Featured />
        <Products />
        <CallToAction />
      </div>
    </section>
  );
};

export default Home;
