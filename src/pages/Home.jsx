import React from "react";
import Navbar from "../layouts/Navbar";
import Content from "../components/home/home/Content";
import CardRow from "../components/home/home/Cardrow";
import Collection from "../components/home/home/Collection";
import { chairs, sofas, tables } from "../data/furnitures";

function Home() {
  return (
    <div>
      <Collection />
      <Content />
      <CardRow data={sofas.concat(chairs, tables)} />
    </div>
  );
}

export default Home;
