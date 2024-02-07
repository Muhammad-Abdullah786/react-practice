import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import Cards from "./components/Cards";

function App() {
  let obj = {
    useernames: true,
    age: 2,
  };
  let user = "ChromeBook";
  let newArray = [2, "chai", 53552, 6326];
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-5 text-black">hello</h1>
      <Cards chennel={obj} username={user}></Cards>
      <Cards username={newArray[1]} btnText="Visit Me"></Cards>
    </>
  );
}

export default App;
