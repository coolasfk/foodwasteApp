import React from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./test_reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>jestem komponentem z reudcuerem</h1>
      <h2>{state.count}</h2>

      {/* <button onClick={dispatch({ type: "increment" })}>zwieksz</button> */}
      <button onClick={() => dispatch({ type: "increment", message:"hello" })}>zwieksz</button>
      {/* <button onClick={() => dispatch({ type: "decrement" })}>pomniejsz</button> */}
    </div>
  );
};

export default Counter;
