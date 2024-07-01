import React from "react";
import ReactDOM from "react-dom/client";

// this is the code or element react take it as but if we put this object in .render it will not show because the react take different params and we don't know yet

// const reactElement = {
//   type: 'a',
//   prop: {
//       href: 'https://google.com',
//       className: 'container',
//       target: '_blank'
//   },
//   childern: 'Click here '
// }

// but react will take thsi as an object

const anotherElement = (
  <a href="https://google.com" target="_blank" className="cont">
    click here
  </a>
);

// lets create react element using react create method

let ReactElement = React.createElement(
  "a", // always a tag is first thing in React.createElement
  { href: "https://google.com" }, // obect which hold the att
  "clich hererkla " // text
);
const reactElement = ReactDOM.createRoot(
  document.getElementById("root")
).render(ReactElement);


// this is react render which has its own unique params we dont know 