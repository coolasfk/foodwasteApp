import FoodComponentPictogram from "./FoodComponentPictogram";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const FoodListComponent = (props) => {
  const removeTheComponent = () => {
    props.setDataFood(props.dataFood.filter((el) => el.key !== props.id));
  };

  const moveToAnotherList = () => {
    props.setDataFood(
      props.dataFood.map((el) => {
        if (el.key === props.id && el.category === "home") {
          el.category = "grocery";
        } else if (el.key === props.id && el.category === "grocery") {
          el.category = "home";
        }

        return el;
      }),
    );
  };

  return (
    <>
      <div className="foodList-wrapper__foodList foodlist">
        <div className="foodlist__foodListElements-wrapper foodListElements-wrapper">
          <button
            onClick={moveToAnotherList}
            className="foodListElements-wrapper__btnAddWrapper btnAddWrapper"
          >
            <div className="btnAddWrapper__handleComponentBtnCircleAdd handleComponentBtnCircleAdd">
              <FontAwesomeIcon
                className="handleComponentBtnCircleAdd__sign"
                icon={faShareFromSquare}
              />
            </div>
          </button>
          <div className="foodListElements-wrapper__textAndPictograms textAndPictograms">
            <h3 className="textAndPictograms__text">{props.foodtext}</h3>

            <FoodComponentPictogram {...props} />
          </div>
          <button
            onClick={removeTheComponent}
            className="foodListElements-wrapper__btnRemoveWrapper btnRemoveWrapper"
          >
            <div className="btnRemoveWrapper__handleComponentBtnCircleRemove handleComponentBtnCircleRemove">
              <div className="handleComponentBtnCircleRemove__sign">+</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodListComponent;
