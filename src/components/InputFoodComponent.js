import { useState } from "react";
import YourFoodListTop from "./YourFoodListTop";
import useGlobalReducer from "./useGlobalReducer";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import InputPictogram from "./InputPictogram";
import FoodListComponent from "./FoodListComponent";
import FoodListList from "./FoodListList";
import GroceryListList from "./GroceryListList";
const InputFoodComponent = (props) => {
  const [state, dispatch] = useGlobalReducer();
  const [componentsGrocery, setComponentsGrocery] = useState([]);
  const [componentsList, setComponentsList] = useState([]);
  const [isGroceryBtnClicked, setIsGroceryBtnClicked] = useState(true);
  const [isFoodListBtnClicked, setIsFoodListBtnClicked] = useState(false);
  const [listHeadlines, setListHeadlines] = useState("grocery list");
  const [btnGroceryStyle, setBtnGroceryStyle] = useState("");
  const [btnFoodStyle, setBtnFoodStyle] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const [foodtext, setFoodtext] = useState("");

  const setFoodtextHandler = (e) => {
    setFoodtext(e.target.value);
  };

  const moveToGroceryList = (e) => {
    setIsGroceryBtnClicked(true);
    setIsFoodListBtnClicked(false);
    setListHeadlines("grocery list");
    setBtnGroceryStyle("rgba(83, 105, 74, 1)");
    setBtnFoodStyle("rgba(228, 234, 228, 1)");
  };
  const moveToFoodList = (e) => {
    setIsFoodListBtnClicked(true);
    setIsGroceryBtnClicked(false);
    setListHeadlines("food list");
    setBtnFoodStyle("rgba(83, 105, 74, 1)");
    setBtnGroceryStyle("rgba(228, 234, 228, 1)");
  };

  const updateLists = () => {
    dispatch({ type: "addFood", foodtext: foodtext });

    if (isGroceryBtnClicked === true) {
      setComponentsGrocery((...componentsGrocery) => [
        ...componentsGrocery,
        <FoodListComponent
          foodtext={foodtext}
          key={uuidv4()}
          {...props}
          inputForFoodList={foodtext}
        />,
      ]);
    }

    if (isFoodListBtnClicked === true) {
      setComponentsList((...componentsList) => [
        ...componentsList,
        <FoodListComponent
          foodtext={foodtext}
          key={uuidv4()}
          {...props}
          inputForFoodList={foodtext}
        />,
      ]);
    }

    setFoodtext("");
  };

  const updateFoodList = () => {
    setComponentsList((...componentsList) => [
      ...componentsList,
      ...componentsGrocery,
    ]);
  };

  const clearGroceryList = () => {
    setComponentsGrocery([]);
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
              required
            />

            <div className="innerText-wrapper__innerLine"></div>
          </div>{" "}
          <InputPictogram foodtext={foodtext}></InputPictogram>
          <button
            type="submit"
            className="background-Rectangle__btn btn"
            onClick={updateLists}
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
      {/* {components} */}
      {isFoodListBtnClicked ? (
        <FoodListList
          isBtnClicked={isBtnClicked}
          updateFoodList={updateFoodList}
          setFoodtextHandler={setFoodtextHandler}
          foodtext={foodtext}
          key={uuidv4()}
          {...props}
          inputForFoodList={foodtext}
          componentsList={componentsList}
        />
      ) : null}
      {isGroceryBtnClicked ? (
        <GroceryListList
          isBtnClicked={isBtnClicked}
          updateFoodList={updateFoodList}
          setFoodtextHandler={setFoodtextHandler}
          foodtext={foodtext}
          key={uuidv4()}
          {...props}
          inputForFoodList={foodtext}
          componentsGrocery={componentsGrocery}
        />
      ) : null}
      {isGroceryBtnClicked ? (
        <div className="main__handleListBtns-wrapper handleListBtns-wrapper">
          <button
            className="handleListBtns-wrapper__btnAddToGroceryList"
            onClick={updateFoodList}
          >
            !!!add entire grocery list to the food list
          </button>
          <button
            className="handleListBtns-wrapper__clearGroceryList"
            onClick={clearGroceryList}
          >
            clear the grocery list
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputFoodComponent;
