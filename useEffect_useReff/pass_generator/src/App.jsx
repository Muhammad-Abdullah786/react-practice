import React, { useState, useCallback } from "react";

function App() {
  // creating password generator
  const [password, setPassword] = useState("");
  const [length, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  // now password functionality
  const generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";
    if ((number = true)) str += "0123456789";
    if ((char = true)) str += "{}!@#$%^&*()*+,-./:;<=>?@";

    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [setPassword, length, number, character]);

  // console.log();

  return (
    <>
      <div>
        <h1 className="text-center text-6xl m-11 text-white ">
          Password Generator
        </h1>
      </div>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-blue-700 bg-purple-300">
        <input type="text" placeholder="Password" value={password} readOnly />
        <button className="outline-none bg-blue-700 text-white px-3">
          copy
        </button>
        <input
          type="range"
          min={6}
          max={40}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            e.target.value = setLenght(e.target.value);
          }}
        />
        <label htmlFor="">length:{length}</label>
        <div className="flex item-center  gap-x-2">
          <input
            type="checkbox"
            defaultChecked={number}
            className="cursor-pointer"
            onChange={() => {
              setNumber((prev) => !prev);
              console.log(setNumber(number));
            }}
          />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex item-center  gap-x-2">
          <input
            type="checkbox"
            defaultChecked={character}
            className="cursor-pointer"
            onChange={() => {
              setCharacter((prev) => !prev);
              console.log(setCharacter(character));
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
