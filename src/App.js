import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./project_1/Home";
import Service from "./project_1/Service";
import About from "./project_1/About";
import Contact from "./project_1/Contact";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./project_1/Navbar";
import Footer from "./project_1/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
