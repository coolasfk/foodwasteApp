import FoodComponentPictogram from "./FoodComponentPictogram";
import { useState, useEffect, useReducer } from "react";
import { reducer, initialState } from "./AddInputToListFunc";

import useGlobalReducer from "./useGlobalReducer";
import console from "console";
import { log } from "console";
import React from "react";

const InputFoodComponent = (props) => {
  const [foodtext, setFoodtext] = useState("");
  // const { state, dispatch } = useGlobalReducer(reducer, { state: [] });

  const { state, dispatch } = useReducer();

  console.log("eca");

  const setFoodtextHandler = (e) => {
    setFoodtext(e.target.value);
  };

  return (
    <div className="main__food-component-wrapper food-component-wrapper">
      <div className="food-component-wrapper__background-Rectangle background-Rectangle">
        <div className="background-Rectangle__innerText-wrapper innerText-wrapper">
          <input
            onChange={setFoodtextHandler}
            className="innerText-wrapper__text"
            placeholder="write here"
            autoComplete="on"
          />

          <div className="innerText-wrapper__innerLine"></div>
        </div>
        <button
          // onClick={() => dispatch({ type: "addFood", foodtext: foodtext })}
          onChange={() => dispatch({ type: "addFood", foodtext: foodtext })}
        >
          {" "}
          add food
        </button>
        {/* tu bedzie dispatch */}
        <FoodComponentPictogram foodtext={foodtext} />
      </div>
    </div>
  );
};

export default InputFoodComponent;
