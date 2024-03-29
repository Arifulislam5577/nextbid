import React from "react";
import Mision from "./Mision";
import Hero from "./Hero";
import Products from "./Products";
import { motion } from "framer-motion";
import Blog from "./Blog";
import useTitle from "../../hooks/useTitle";
import CallToAction from "./CallToAction";
import Testimonial from "./Testimonial";
const Home = () => {
  useTitle("NextBid || Get your products before sold");
  return (
    <motion.section
      className="py-5"
      initial={{ y: "3%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="container">
        <Hero />
        <Mision />
        <Products />
        <Testimonial />
        <Blog />
        <CallToAction />
      </div>
    </motion.section>
  );
};

export default Home;
