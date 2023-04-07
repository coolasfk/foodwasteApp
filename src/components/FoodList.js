import FoodListComponent from "./FoodListComponent";
import { useEffect, useRef } from "react";

const FoodList = (props) => {
  console.log("foodlist props", props, props.data);
  return (
    <div className="main__foodList-wrapper foodList-wrapper">
      <div className="foodList-wrapper__headline-wrapper headline-wrapper">
        <h2 className="headline-wrapper__headline">Your Food List</h2>
      </div>
      <div className="foodList-wrapper__foodList">
        <FoodListComponent {...props} />
      </div>
    </div>
  );
};
export default FoodList;
