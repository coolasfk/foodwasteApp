import React, { createContext, useContext, useReducer } from "react";
import FoodListComponent from "../components/FoodListComponent";

export const initialState = { data: [] };

export const reducer = (state, action) => {
  console.log(action.foodtext);
  switch (action.type) {
    case "addFood":
      return {
        ...state,

        data: action.foodtext,
      };
    case "removeFood":
      return {
        ...state,
        data: state.data.filter((item) => item !== action.foodtext),
      };

    default:
      throw new Error();
  }
};
export const StoreContext = createContext(initialState);
