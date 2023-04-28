import { useState, useEffect } from "react";
import ListTopHeadlines from "./ListTopHeadlines";
import CopyToClipboard from "react-copy-to-clipboard";

import { v4 as uuidv4 } from "uuid";
import React from "react";
import InputPictogram from "./InputPictogram";
import FoodListComponent from "./FoodListComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const InputFoodComponent = (props) => {
  const [dataFood, setDataFood] = useState(() => {
    const fetchDataFood = localStorage.getItem("dataFood");
    const parseDataFood = JSON.parse(fetchDataFood);
    return parseDataFood || [];
  });

  const [isGroceryBtnClicked, setIsGroceryBtnClicked] = useState(true);
  const [isHomeListBtnClicked, setIsHomeListBtnClicked] = useState(false);
  const [listHeadlines, setListHeadlines] = useState("To Buy:");
  const [btnGroceryStyle, setBtnGroceryStyle] = useState("");
  const [btnFoodStyle, setBtnFoodStyle] = useState("");

  const [foodtext, setFoodtext] = useState("");
  const [textColorHome, setTextColorHome] = useState("rgba(170, 188, 162, 1");
  const [textColorGrocery, setTextColorGrocery] = useState("");

  useEffect(() => {
    localStorage.setItem("dataFood", JSON.stringify(dataFood));
  });

  const setFoodtextHandler = (e) => {
    setFoodtext(e.target.value.toLowerCase());
  };

  const updateLists = () => {
    if (isGroceryBtnClicked === true) {
      setDataFood([
        ...dataFood,
        {
          foodtext: foodtext,
          category: "grocery",
          key: uuidv4(),
        },
      ]);
    }

    if (isHomeListBtnClicked === true) {
      setDataFood([
        ...dataFood,
        {
          foodtext: foodtext,
          category: "home",
          key: uuidv4(),
        },
      ]);
    }

    setFoodtext("");
  };

  const updateHomeList = () => {
    let helpState = [...dataFood];
    helpState.forEach((el) => (el.category = "home"));

    setDataFood([...helpState]);
  };
  const clearGroceryList = () => {
    setDataFood(dataFood.filter((el) => el.category !== "grocery"));
  };

  const updateGroceryList = () => {
    let helpFood = [...dataFood];
    helpFood.forEach((el) => (el.category = "grocery"));
    setDataFood([...helpFood]);
  };

  const clearFoodList = () => {
    setDataFood([]);
  };

  const displayGroceryList = () => {
    setIsGroceryBtnClicked(true);
    setIsHomeListBtnClicked(false);
    setListHeadlines("To Buy:");

    // setBtnGroceryStyle("rgba(228, 234, 228, 1)");
    // setBtnFoodStyle("rgba(83, 105, 74, 1)");

    setTextColorHome("rgba(170, 188, 162, 1");
    setTextColorGrocery("rgba(228, 234, 228, 1)");
    setBtnGroceryStyle("rgba(83, 105, 74, 1)");
    setBtnFoodStyle("rgba(228, 234, 228, 1)");
  };

  const displayHomeList = () => {
    setIsHomeListBtnClicked(true);
    setIsGroceryBtnClicked(false);
    setListHeadlines("I Have:");

    setBtnFoodStyle("rgba(83, 105, 74, 1)");
    setBtnGroceryStyle("rgba(228, 234, 228, 1)");
    setTextColorGrocery("rgba(170, 188, 162, 1");
    setTextColorHome("rgba(228, 234, 228, 1)");
  };

  // entireFoodList.map((el) => {
  //   for (let i = 0; i < 5; i++) {
  //     el[0].foodtext + "5";
  //   }
  // });

  // let newList = entireFoodList.map((el) => "1. " + el.foodtext);

  let onlyGroceryList = dataFood.filter((el) => el.category !== "home");

  let entireFoodList = onlyGroceryList.map((el, index) => {
    let num = index + 1;
    num = num.toString();

    let text = num + ". " + el.foodtext;

    return text;
  });

  // let newFood = "1. " + entireFoodList[1].foodtext;
  // console.log("entireFoodList:", entireFoodList[1].foodtext);
  console.log("entireFoodList index:", entireFoodList);
  // console.log("newFood", newFood);
  // console.log("newList", newList);

  // let newEntireFoodList = JSON.stringify(
  //   entireFoodList.map((el) => el.foodtext),
  // );

  let newEntireFoodList = JSON.stringify(entireFoodList);

  const finalString = newEntireFoodList
    .replace("[", "")

    .replace("]", "")
    .replace(/['"]/g, "")
    .replace(/,/g, "\n");
  // .replace(/( )/g, "\n");

  console.log(finalString);

  return (
    <>
      <div className="main__food-component-wrapper food-component-wrapper">
        <div className="food-component-wrapper__background-Rectangle background-Rectangle">
          <div className="background-Rectangle__innerText-wrapper innerText-wrapper">
            <input
              onChange={setFoodtextHandler}
              className="innerText-wrapper__text"
              placeholder="add food to your list"
              autoComplete="on"
              value={foodtext}
              required
            />

            <div className="innerText-wrapper__innerLine"></div>
          </div>
          <InputPictogram foodtext={foodtext}></InputPictogram>
          <button
            type="submit"
            className="background-Rectangle__btn btn"
            onClick={updateLists}
          >
            <h3 className="btn__plus">+</h3>
          </button>
        </div>
      </div>
      <div className="main__chooseListBtn-wrapper chooseListBtn-wrapper">
        <button
          onClick={displayGroceryList}
          className="chooseListBtn-wrapper__shoppingListBtn"
          style={{ backgroundColor: btnGroceryStyle, color: textColorGrocery }}
        >
          to buy list
        </button>
        <button
          onClick={displayHomeList}
          className="chooseListBtn-wrapper__foodListBtn"
          style={{ backgroundColor: btnFoodStyle, color: textColorHome }}
        >
          I have list
        </button>
      </div>
      <ListTopHeadlines listHeadlines={listHeadlines} />

      {dataFood.map((obj) => {
        if (isHomeListBtnClicked && obj.category === "home") {
          return (
            <FoodListComponent
              foodtext={obj.foodtext}
              key={obj.key}
              id={obj.key}
              setDataFood={setDataFood}
              isHomeListBtnClicked={isHomeListBtnClicked}
              dataFood={dataFood}
              isGroceryBtnClicked={isGroceryBtnClicked}
              category={obj.category}
            />
          );
        } else if (isGroceryBtnClicked && obj.category === "grocery") {
          return (
            <FoodListComponent
              foodtext={obj.foodtext}
              key={obj.key}
              id={obj.key}
              setDataFood={setDataFood}
              isHomeListBtnClicked={isHomeListBtnClicked}
              dataFood={dataFood}
              isGroceryBtnClicked={isGroceryBtnClicked}
              category={obj.category}
            />
          );
        } else {
          return null;
        }
      })}

      {isGroceryBtnClicked ? (
        <div className="main__handleListBtns-wrapper handleListBtns-wrapper">
          <button
            className="handleListBtns-wrapper__btnAddToGroceryList"
            onClick={updateGroceryList}
          >
            move to "I have list"
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <FontAwesomeIcon
                  className="circle__plus"
                  icon={faShareFromSquare}
                />
              </div>
            </div>
          </button>
          <button
            className="handleListBtns-wrapper__clearGroceryList clearGroceryList"
            onClick={clearGroceryList}
          >
            clear the list
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <div className="circle__cross">+</div>
              </div>
            </div>
          </button>
        </div>
      ) : null}
      {isHomeListBtnClicked ? (
        <div className="main__handleListBtns-wrapper handleListBtns-wrapper">
          <button
            className="handleListBtns-wrapper__btnAddToGroceryList"
            onClick={updateHomeList}
          >
            move to the "to buy list"
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <FontAwesomeIcon
                  className="circle__plus"
                  icon={faShareFromSquare}
                />
              </div>
            </div>
          </button>
          <button
            className="handleListBtns-wrapper__clearGroceryList clearGroceryList"
            onClick={clearFoodList}
          >
            clear the list
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <div className="circle__cross">+</div>
              </div>
            </div>
          </button>
        </div>
      ) : null}
      <CopyToClipboard text={finalString}>
        <button className="handleListBtns-wrapper__clearGroceryList clearGroceryList">
          copy "to buy" list to clipboard
          <div className="clearGroceryList__circle-wrapper circle-wrapper">
            <div className="circle-wrapper__circle circle">
              <FontAwesomeIcon className="circle__copy" icon={faCopy} />
              {/* <div className="circle__cross">+</div> */}
            </div>
          </div>
        </button>
      </CopyToClipboard>
    </>
  );
};

export default InputFoodComponent;
