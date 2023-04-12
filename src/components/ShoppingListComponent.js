import FoodComponentPictogram from "./FoodComponentPictogram";
import React from "react";

const ShoppingListComponent = (props) => {
  return (
    <div className="foodList-wrapper__foodList foodlist">
      <div className="foodlist__foodListElements-wrapper foodListElements-wrapper">
        <h3 className="foodListElements-wrapper__text">{props.foodtext}</h3>

        <div className="foodListElements-wrapper__pictogram">
          <FoodComponentPictogram {...props} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingListComponent;
