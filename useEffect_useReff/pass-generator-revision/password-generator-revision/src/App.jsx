import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // make password generator
  const passwordGenerator = ()=>{

  }// we will use useCallback because the password gen has dependencise which are charc
  return (
    <>
      <h1 className="text-white text-2xl bg-slate-600 rounded-lg flex justify-center items-center m-3 p-2 ">
        Password Generator
      </h1>

      <div className="flex  border-spacing-1 border-2 border-green-950">
        <input type="text" />
        Copy
      </div>
      <div></div>
      <div></div>
    </>
  );
}

export default App;


