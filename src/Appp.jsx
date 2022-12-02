import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from "./componenets/Home";
import About from "./componenets/About";
import Services from "./componenets/Services";
import Contact from "./componenets/Contact";
// import Navbar from "./componenets/Navbar";
import Navbar2 from "./componenets/Navbar2";
import Footer from "./componenets/ExtraComponents/Footer";

const Appp = () => {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Appp;
