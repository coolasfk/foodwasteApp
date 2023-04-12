import { useReducer } from "react";
import { initialState, reducer } from "../reducers/ListComponentReducer";

// const GlobalStateContext = createContext(); //?

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useGlobalState;
