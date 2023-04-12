import React, { createContext, useContext, useReducer } from "react";
import FoodListComponent from "../components/FoodListComponent";

export const initialState = { data: [] };

// let obj =[{name:'cheese',img:""}]
// action przekazuje argumenty
export const reducer = (state, action) => {
  console.log("this is state from REDUCER", state);
  switch (action.type) {
    case "addFood":
      return {
        // data: state.data.push(action.foodtext),
        // data: state.data.push["data2"],
        // data: action.data.push(action.foodtext),
        // data: state.data.push("push"),
        ...state,
        // data: state.data + "/n" + action.foodtext,
        // data: action.foodtext,
        // data: state.data + <FoodListComponent props={action.foodtext} />,
        data: action.foodtext,
      };
    case "removeFood":
      return {
        ...state,
        data: state.data.filter((item) => item !== action.foodtext),
      };
    // return { data: "lal1a" };

    default:
      throw new Error();
  }
};
export const StoreContext = createContext(initialState);
//ser,pizza,pomidor

// arr = ['A', 'B', 'C'];
// arr = arr.filter(e => e !== 'B'); // will return ['A', 'C']
