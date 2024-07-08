import React from "react";
import Navbar from "../components/home/home/Navbar";
import Content from "../components/home/home/Content";
import CardRow from "../components/home/home/Cardrow";
import Collection from "../components/home/home/Collection";
import Contact from "../components/home/home/Contact";
import Aboutus from "../components/home/home/Aboutus";
import Footer from "../components/home/home/Footer";
import { chairs, sofas, tables } from "../data/furnitures";

function Home() {
  return (
    <div>
      <Navbar />
      <Collection />
      <Content />
      <CardRow data={sofas.concat(chairs, tables)} />
      <Contact />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default Home;
