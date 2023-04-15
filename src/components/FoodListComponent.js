import { useState } from "react";
import useGlobalReducer from "./useGlobalReducer";
import FoodComponentPictogram from "./FoodComponentPictogram";
import React from "react";
// import { ReactDOM } from "react";

const FoodListComponent = (props) => {
  const [isRemoveBtnClicked, setIsRemoveBtnClicked] = useState(true);
  // const [state, dispatch] = useGlobalReducer();
  console.log("food list comp props", props);

  // foodtext = props.foodtext;
  // removeFood
  const removeTheComponent = () => {
    // setIsRemoveBtnClicked(e.target.removeChild(e.target));
    setIsRemoveBtnClicked(false);

    // data: state.data.filter((item) => item !== action.foodtext),
  };
  return (
    <>
      {isRemoveBtnClicked ? (
        <div className="foodList-wrapper__foodList foodlist">
          <div className="foodlist__foodListElements-wrapper foodListElements-wrapper">
            <button className="foodListElements-wrapper__btnAddWrapper btnAddWrapper">
              <div className="btnAddWrapper__handleComponentBtnCircleAdd handleComponentBtnCircleAdd">
                <div className="handleComponentBtnCircleAdd__sign">+</div>
              </div>
            </button>
            <h3 className="foodListElements-wrapper__text">{props.foodtext}</h3>

            <div className="foodListElements-wrapper__pictogram">
              <FoodComponentPictogram {...props} />
            </div>
            <button
              onClick={removeTheComponent}
              // onClick={removeTheComponent}
              className="foodListElements-wrapper__btnRemoveWrapper btnRemoveWrapper"
            >
              <div className="btnRemoveWrapper__handleComponentBtnCircleRemove handleComponentBtnCircleRemove">
                <div className="handleComponentBtnCircleRemove__sign">+</div>
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FoodListComponent;
