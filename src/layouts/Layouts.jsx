import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

function Layouts() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Aboutus />
        <Footer/>
      </div>
    </div>
  );
}

export default Layouts;
