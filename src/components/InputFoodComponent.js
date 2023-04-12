import { useState } from "react";
import YourFoodListTop from "./YourFoodListTop";
import useGlobalReducer from "./useGlobalReducer";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import InputPictogram from "./InputPictogram";
import FoodListComponent from "./FoodListComponent";
const InputFoodComponent = (props) => {
  const [state, dispatch] = useGlobalReducer();
  const [components, setComponents] = useState([]);
  const [isGroceryBtnClicked, setIsGroceryBtnClicked] = useState(true);
  const [isFoodListBtnClicked, setIsFoodListBtnClicked] = useState(false);
  const [listHeadlines, setListHeadlines] = useState("grocery list");
  const [btnGroceryStyle, setBtnGroceryStyle] = useState("");
  const [btnFoodStyle, setBtnFoodStyle] = useState("");

  const [foodtext, setFoodtext] = useState("");

  console.log("this is state from input", state);
  const setFoodtextHandler = (e) => {
    setFoodtext(e.target.value);
  };
  const [inputForFoodList, setInputForFoodList] = useState([]);

  const updateFoodList = () => {
    dispatch({ type: "addFood", foodtext: foodtext });

    setInputForFoodList({ foodtext });
    setComponents((...components) => [
      ...components,
      <FoodListComponent
        foodtext={foodtext}
        key={uuidv4()}
        {...props}
        inputForFoodList={foodtext}
      />,
    ]);
    setFoodtext("");
  };

  const moveToGroceryList = (e) => {
    setIsGroceryBtnClicked(true);
    setIsFoodListBtnClicked(false);
    setListHeadlines("grocery list");
    setBtnGroceryStyle("rgba(83, 105, 74, 1)");
    setBtnFoodStyle("rgba(228, 234, 228, 1)");
  };
  const moveToFoodList = (e) => {
    console.log("this is e", e);
    setIsFoodListBtnClicked(true);
    setIsGroceryBtnClicked(false);
    setListHeadlines("food list");
    setBtnFoodStyle("rgba(83, 105, 74, 1)");
    setBtnGroceryStyle("rgba(228, 234, 228, 1)");
  };
  return (
    <>
      <div className="main__food-component-wrapper food-component-wrapper">
        <div className="food-component-wrapper__background-Rectangle background-Rectangle">
          <div className="background-Rectangle__innerText-wrapper innerText-wrapper">
            <input
              onChange={setFoodtextHandler}
              className="innerText-wrapper__text"
              placeholder="add food to your list"
              autoComplete="on"
              value={foodtext}
            />

            <div className="innerText-wrapper__innerLine"></div>
          </div>{" "}
          <InputPictogram foodtext={foodtext}></InputPictogram>
          <button
            className="background-Rectangle__btn btn"
            onClick={updateFoodList}
          >
            <h3 className="btn__plus">+</h3>
          </button>
        </div>
      </div>
      <div className="main__chooseListBtn-wrapper chooseListBtn-wrapper">
        <button
          onClick={moveToGroceryList}
          className="chooseListBtn-wrapper__shoppingListBtn"
          style={{ backgroundColor: btnGroceryStyle, color: btnFoodStyle }}
        >
          grocery list
        </button>
        <button
          onClick={moveToFoodList}
          className="chooseListBtn-wrapper__foodListBtn"
          style={{ backgroundColor: btnFoodStyle, color: btnGroceryStyle }}
        >
          food list
        </button>
      </div>
      <YourFoodListTop listHeadlines={listHeadlines} />
      {components}
    </>
  );
};

export default InputFoodComponent;
