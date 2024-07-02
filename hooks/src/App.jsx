import { useState } from "react";

function App() {
  // let counter = 5;
  // the variabel is changing in console log but not in dom we have to use useState now
  // let conter = 1; // not work

  let [counter, changeCounter] = useState(4);

  // const addValue = () => {
  //   conter++;
  //   console.log("clicked ", conter); /// as you can see the value is not chainging but its is changing in cosole
  // };

  const addValue = () => {
    changeCounter(counter + 1);
  };
  const rmValue = () => {
    if (counter === 0) {
      return;
    }
    changeCounter(counter - 1);
  };

  return (
    <>
      <h1>hook practice </h1>
      <h3> creating counter</h3>

      <button onClick={addValue}>Add value</button>
      <button onClick={rmValue}>remove value</button>

      <h2>THe Value is {counter}</h2>
      <h2>THe Value is {counter}</h2>
      <h2>THe Value is {counter}</h2>
      <h2>THe Value is {counter}</h2>
      <h2>THe Value is {counter}</h2>
    </>
  );
}

export default App;
