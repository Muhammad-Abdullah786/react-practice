import React, { useRef, useState, useCallback, useEffect } from "react";

function App() {
  // creating password generator
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  // ref hook
  const passwordRef = useRef(null);
  // now password functionality
  const generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "{}!@#$%^&*()*+,-./:;<=>?@";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character, setPassword, password]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generator();
  }, [length, character, number, setPassword]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl mb-8">Password Generator</h1>
      <div className="w-full max-w-md px-8 py-6 bg-fuchsia-950 rounded-lg shadow-md flex flex-col items-center gap-4">
        <input
          ref={passwordRef}
          type="text"
          placeholder="Password"
          className="w-full p-3 max-w-md bg-gray-800 rounded outline-none text-white"
          value={password}
          readOnly
        />
        <button
          onClick={copyPassword}
          className="py-2 px-4 bg-blue-700 text-white rounded outline-none hover:bg-blue-300 active:bg-stone-600 transition-colors"
        >
          Copy
        </button>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={6}
            max={40}
            value={length}
            className="flex-grow"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={number}
            className="cursor-pointer"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="">Number</label>
          <input
            type="checkbox"
            checked={character}
            className="cursor-pointer"
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
