import Card from "./Components/Conponents";

function App() {
  let myObj = {
    username: "Muhammmad abdullah",
    age: 34,
    profession: "data Analyst",
  };

  let newArr = [1, 34, 1, 5, 67, 47, "hello"];
  return (
    <>
      <div
        className="flex
     items-center justify-center m-2"
      >
        <h1 className=" text-2xl font-bold p-2 w-80  text-yellow-50 bg-teal-500 rounded-md hover:bg-teal-200 transition-all ">
          A Product Card
        </h1>
      </div>
      <div className="flex ">
        <Card
          username="Muhammad"
          someObje={newArr}
          age={33}
          btnText="click here"
        ></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
