import React from "react";
import Navbar from "../layouts/Navbar";
import CardRow from "../components/home/home/Cardrow";

function ProductsList(props) {
  return (
    <div>
    
      <div className="pt-14">
        <CardRow data={props.data} />
      </div>
    </div>
  );
}

export default ProductsList;
