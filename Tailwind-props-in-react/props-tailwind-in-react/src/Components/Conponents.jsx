import React from "react";

function Card({ username, btnText = "Visit", age }) {
  // console.log("username", props.username); // this is one way using props

  // another way is to desturcture the props
  console.log("destucture username :", username);

  // console.log("props are :  ", props); // from the console you can see it has some different prototypes it can be used in like this
  // go to App.jsx and line number 15
  return (
    <>
      <div className="container w-72 px-4 py-8">
        <div className=" mb-8">
          <p className="text-2xl font-semibold text-green-600">{age}</p>
        </div>
        <div className="shadow-md rounded-md w-2/5 h-auto">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
          />
        </div>
        <div className="p-4 mt-4">
          <p className="text-base leading-loose text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {btnText}
            {/* {btnText || "Visit"} // means this if btnText dont exist use "Visit"  but there is another way goto line 3  */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
