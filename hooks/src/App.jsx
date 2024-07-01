import { useState } from "react";

function App() {
  // let counter = 5;
  // the variabel is changing in console log but not in dom we have to use useState now
  let [counter, changingCounter] = useState(0);

  const addValue = () => {
    {
      counter++;
      changingCounter(counter);
      console.log("clicked ", counter);
    }
  };

  const removeValue = () => {
    {
      if (counter === 0) {
        return (counter = 0);
      }
      counter--;
      changingCounter(counter);
    }
  };
  return (
    <>
      <h3>hooks in react</h3>
      <h2>counter value = {counter}</h2>
      <button onClick={addValue}>increment</button>
      <br />
      <button onClick={removeValue}>decrement</button>
    </>
  );
}

export default App;
