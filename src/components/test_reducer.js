import { useReducer } from "react";

export const initialState = { count: 0 };

///action :
export function reducer(state, action) {
  console.log("action", action);

  switch (action.type) {
    case "increment":
      //action.message
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
