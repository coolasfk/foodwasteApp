import FoodComponentPictogram from "./FoodComponentPictogram";
import React from "react";

const FoodListComponent = (props) => {
  console.log(props);
  return (
    <div style={{ border: "4px red solid" }}>
      <h3>{props.data}</h3>

      <h3>hey</h3>
      <FoodComponentPictogram />
    </div>
  );
};

export default FoodListComponent;
