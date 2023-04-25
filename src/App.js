import React from "react";
import "./index.scss";
import "./App.scss";
import ZeroFoodwasteLogo from "./components/ZeroFoodwasteLogo";
import InputFoodComponent from "./components/InputFoodComponent";
import MenuTop from "./components/MenuTop";

import { useState } from "react";
import useGlobalReducer from "./components/useGlobalReducer";

import FoodList from "./components/ListTopHeadlines";

function App() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useGlobalReducer();
  const [foodListComponents, setFoodListComponents] = useState([<FoodList />]);
  console.log("app.js state", state);
  return (
    <>
      <header className="header">
        <MenuTop />
        <ZeroFoodwasteLogo />
      </header>
      <main className="main">
        {/* <div className="main__title-wrapper title-wrapper"> */}
        {/* <h1 className="title-wrapper__title">Add food to your list</h1> */}
        {/* <BtnAddFood setData={setData} data={data} /> */}

        <InputFoodComponent
          setData={setData}
          data={data}
          setFoodListComponents={setFoodListComponents}
          foodListComponents={foodListComponents}
        />
        {/* </div> */}
        {/* <FoodList setData={setData} data={data} state={state} /> */}
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
