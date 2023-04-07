import { useReducer } from "react";

export const initialState = { data: [] };

// let obj =[{name:'cheese',img:""}]
// action przekazuje argumenty
export const reducer = (state, action) => {
  switch (action.type) {
    case "addFood":
      return {
        // data: state.data.push(action.foodtext),
        data: state.data.push["data2"],
        // data: state.data.push("push"),
      };
    case "removeFood":
      return { data: state.data.filter((item) => item !== action.foodtext) };
    default:
      return state.data;
  }
};

//ser,pizza,pomidor

// arr = ['A', 'B', 'C'];
// arr = arr.filter(e => e !== 'B'); // will return ['A', 'C']
