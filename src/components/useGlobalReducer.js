import { useReducer } from "react";
import { initialState, reducer } from "./AddInputToListFunc";

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useGlobalState;
