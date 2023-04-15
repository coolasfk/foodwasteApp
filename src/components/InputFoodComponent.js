// w tym pliku mamy informacje o wpisanym jedzeniu i id [{cheese,'2312sad'},{}]
//podasz do HomeList liste zakupow no i handlery z statea

//problem z keys

import { useState } from "react";
import YourFoodListTop from "./YourFoodListTop";
import useGlobalReducer from "./useGlobalReducer";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import InputPictogram from "./InputPictogram";
import FoodListComponent from "./FoodListComponent";
import HomeList from "./HomeList";
import GroceryList from "./GroceryList";
const InputFoodComponent = (props) => {
  // const [state, dispatch] = useGlobalReducer();

  const [dataGrocery, setDataGrocery] = useState([]);

  const [dataHome, setDataHome] = useState([]);

  const [isGroceryBtnClicked, setIsGroceryBtnClicked] = useState(true);
  const [isFoodListBtnClicked, setIsFoodListBtnClicked] = useState(false);
  const [listHeadlines, setListHeadlines] = useState("grocery list");
  const [btnGroceryStyle, setBtnGroceryStyle] = useState("");
  const [btnFoodStyle, setBtnFoodStyle] = useState("");

  const [foodtext, setFoodtext] = useState("");

  const setFoodtextHandler = (e) => {
    setFoodtext(e.target.value);
  };

  const moveToGroceryList = (e) => {
    setIsGroceryBtnClicked(true);
    setIsFoodListBtnClicked(false);
    setListHeadlines("grocery list");
    setBtnGroceryStyle("rgba(228, 234, 228, 1)");
    setBtnFoodStyle("rgba(83, 105, 74, 1)");
  };

  const moveToFoodList = () => {
    setIsFoodListBtnClicked(true);
    setIsGroceryBtnClicked(false);
    setListHeadlines("home list");

    setBtnFoodStyle("rgba(228, 234, 228, 1)");
    setBtnGroceryStyle("rgba(83, 105, 74, 1)");
  };

  const updateLists = () => {
    // dispatch({ type: "addFood", foodtext: foodtext, action: foodtext });
    // CZY JA W OGOLE TEGO POTRZEBUJE TEGO REDUCERA
    //   setComponentsGrocery((...componentsGrocery) => [
    //     ...componentsGrocery,
    //     <FoodListComponent
    //       foodtext={foodtext}
    //       key={uuidv4()}
    //       {...props}
    //       inputForFoodList={foodtext}
    //     />,
    //   ]);
    if (isGroceryBtnClicked === true) {
      setDataGrocery([
        ...dataGrocery,
        {
          foodtext: foodtext,
          key: uuidv4(),
        },
      ]);
    }

    if (isFoodListBtnClicked === true) {
      // setComponentsList((...componentsList) => [
      //   ...componentsList,
      //   <FoodListComponent
      //     foodtext={foodtext}
      //     key={uuidv4()}
      //     {...props}
      //     inputForFoodList={foodtext}
      //   />,
      // ]);

      setDataHome([
        ...dataHome,
        {
          foodtext: foodtext,
          key: uuidv4(),
        },
      ]);
    }
    // todo wyzej

    setFoodtext("");
  };

  const updateFoodList = () => {
    // setComponentsList((...componentsList) => [
    //   ...componentsList,
    //   ...componentsGrocery,
    // ]);

    // tez analogia
    //   setDataHome({
    //     ...dataHome,
    //     ...dataGrocery,
    //   });
    // };

    setDataHome([...dataHome, ...dataGrocery]);
  };

  const clearGroceryList = () => {
    // setComponentsGrocery([]);
    setDataGrocery([]);
  };

  const updateGroceryList = () => {
    // setComponentsGrocery((...componentsGrocery) => [
    //   ...componentsGrocery,
    //   ...componentsList,
    // ]);

    setDataGrocery([...dataGrocery, ...dataHome]);
    dataHome.forEach((component, index) => (index = index + 2));
    dataGrocery.forEach((component, index) => (index = index + 2));
  };

  const clearFoodList = () => {
    // setComponentsList([]);
    setDataHome([]);
  };

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
          onClick={moveToGroceryList}
          className="chooseListBtn-wrapper__shoppingListBtn"
          style={{ backgroundColor: btnGroceryStyle, color: btnFoodStyle }}
        >
          grocery list
        </button>
        <button
          onClick={moveToFoodList}
          className="chooseListBtn-wrapper__foodListBtn"
          style={{ backgroundColor: btnFoodStyle, color: btnGroceryStyle }}
        >
          home list
        </button>
      </div>
      <YourFoodListTop listHeadlines={listHeadlines} />

      {isFoodListBtnClicked ? (
        // todo zmienic nazwe
        <HomeList
          // updateFoodList={updateFoodList}
          // setFoodtextHandler={setFoodtextHandler}
          // foodtext={foodtext}
          // key={uuidv4()}
          {...props}
          // inputForFoodList={foodtext}
          // componentsList={componentsList}
          dataHome={dataHome}
        />
      ) : null}

      {/* {isFoodListBtnClicked ? (
        // todo zmienic nazwe
        <HomeList
          // isBtnClicked={isBtnClicked}
          // updateFoodList={updateFoodList}
          // setFoodtextHandler={setFoodtextHandler}
          foodtext={foodtext}
          // key={uuidv4()}
          // {...props}
          // inputForFoodList={foodtext}
          componentsList={componentsList} 
          // czyli na nowo to bylaby nazwa skladnika i jego id
        >
          componentsList.map(obj=> {
            <FoodListComponent nazwa={obj.nazwa} id={obj.id} />
          })


          
        </HomeList>
      ) : null} */}

      {/* mozna text && */}
      {isGroceryBtnClicked ? (
        <GroceryList
          // isBtnClicked={isBtnClicked}
          // updateFoodList={updateFoodList}
          // setFoodtextHandler={setFoodtextHandler}
          // foodtext={foodtext}
          // key={uuidv4()}
          {...props}
          // inputForFoodList={foodtext}
          dataGrocery={dataGrocery}
        />
      ) : null}
      {isGroceryBtnClicked ? (
        <div className="main__handleListBtns-wrapper handleListBtns-wrapper">
          <button
            className="handleListBtns-wrapper__btnAddToGroceryList"
            onClick={updateFoodList}
          >
            add the list to the home list
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <div className="circle__plus">+</div>
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
      {isFoodListBtnClicked ? (
        <div className="main__handleListBtns-wrapper handleListBtns-wrapper">
          <button
            className="handleListBtns-wrapper__btnAddToGroceryList"
            onClick={updateGroceryList}
          >
            add to the grocery list
            <div className="clearGroceryList__circle-wrapper circle-wrapper">
              <div className="circle-wrapper__circle circle">
                <div className="circle__plus">+</div>
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
    </>
  );
};

export default InputFoodComponent;
