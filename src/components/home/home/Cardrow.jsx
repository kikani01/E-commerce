import React from "react";
import Card from "./Card";

function CardRow(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-[-50px] pl-5 overflow-hidden gap-6 md:grid-cols-3 lg:grid-cols-4 p-2">
      {props.data.map((value) => {
        return (
          <Card
            image={value.image}
            category={value.category}
            title={value.title}
            pw={value.pw}
            price={value.price}
            sale={value.offer}
            color={value.color}
          />
        );
      })}
    </div>
  );
}

export default CardRow;
