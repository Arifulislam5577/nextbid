import React from "react";
import CallToAction from "./CallToAction";
import Mision from "./Mision";
import Hero from "./Hero";
import Products from "./Products";

import { motion } from "framer-motion";
const Home = () => {
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
        <CallToAction />
      </div>
    </motion.section>
  );
};

export default Home;
