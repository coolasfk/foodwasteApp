import InputFoodComponent from "./InputFoodComponent";
import React, { useRef } from "react";
import { useState } from "react";

const BtnAddFood = (props) => {
  // const [component, setComponent] = useState(null);

  // const addFood = () => {
  //   setComponent(<InputFoodComponent key={uuidv4()} />);
  // };
  // console.log("btnAddFood", props);
  const [isClicked, setIsClicked] = useState(false);

  const addFood = () => {
    setIsClicked(true);
  };

  return (
    <>
      <div className="title-wrapper__addBtn-wrapper addBtn-wrapper">
        <button onClick={addFood} className="addBtn-wrapper__addBtn addBtn">
          <h2 className="addBtn__plus">+</h2>
        </button>
      </div>
      {/* <div>{isClicked ? <InputFoodComponent /> : null}</div> */}
      <div>{isClicked && <InputFoodComponent {...props} />}</div>
    </>
  );
};

export default BtnAddFood;
