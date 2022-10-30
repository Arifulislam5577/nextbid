import React from "react";
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
      </div>
    </section>
  );
};

export default Home;
