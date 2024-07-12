import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // we will use useCallback because the password gen has dependencise which are char and length and numvber

  // useCallback take function and dependencise as a funtion

  // make password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+{}":?><~`';
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [password, charAllowed, numberAllowed, length]);
  //w now we cannot render theis function to render it we will use useEffect it take a funtuion and dependency

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-white text-2xl bg-slate-600 rounded-lg flex justify-center items-center m-3 p-2">
        Password Generator
      </h1>

      <div className="flex flex-col items-center w-full max-w-md p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center w-full mb-4">
          <input
            className="w-full p-2 rounded-md bg-gray-900 text-white"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => navigator.clipboard.writeText(password)}
            
          >
            Copy
          </button>
        </div>

        <div className="w-full mb-4">
          <label className="text-white mr-2">Length: {length}</label>
          <input
            className="w-full"
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex items-center w-full mb-2">
          <input
            className="mr-2"
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="text-white">Characters</label>
        </div>

        <div className="flex items-center w-full mb-4">
          <input
            className="mr-2"
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-white">Numbers</label>
        </div>

        <button
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
