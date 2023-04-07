import React from "react";
import "./index.scss";
import "./App.scss";
import ZeroFoodwasteLogo from "./components/ZeroFoodwasteLogo";
import FoodList from "./components/FoodList";
import { useState } from "react";

import TestCounter from "./components/test_component";

import BtnAddFood from "./components/BtnAddFood";
function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <header className="header">
        <ZeroFoodwasteLogo />
      </header>
      <main className="main">
        <div className="main__title-wrapper title-wrapper">
          <h1 className="title-wrapper__title">Add food to your list</h1>
          <BtnAddFood setData={setData} data={data} />
        </div>
        <FoodList setData={setData} data={data} />
        <TestCounter />
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
