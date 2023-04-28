import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";
import { ReactComponent as Milk } from "../assets/foodPictograms/milk.svg";
import React from "react";

const InputPictogram = ({ foodtext }) => {
  return (
    <>
      {foodtext === "cheese" ? (
        <CheeseIcon className="background-Rectangle__pictogram" />
      ) : null}
      {foodtext === "milk" ? (
        <Milk className="background-Rectangle__pictogram-milk" />
      ) : null}
    </>
  );
};
export default InputPictogram;
