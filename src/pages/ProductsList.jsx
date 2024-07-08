import React from "react";
import Navbar from "../components/home/home/Navbar";
import CardRow from "../components/home/home/Cardrow";

function ProductsList(props) {
  return (
    <div>
      <Navbar />
      <div className="pt-14">
        <CardRow data={props.data} />
      </div>
    </div>
  );
}

export default ProductsList;
