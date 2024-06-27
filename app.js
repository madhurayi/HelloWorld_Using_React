// import React from "react";
// import ReactDOM from "react-dom/client";

// const hed = <h1>namastereact </h1>;
// // const jsxheading =<h1> Namaste React Using JSX </h1>;

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(hed);  //render will take javascript object and convert it into dom that is understood by browser.


import React from "react";
import ReactDOM from "react-dom/client";

const hed = <h1>namastereact</h1>; // Assuming you want an h1 element
console.log(hed);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(hed); // Render the h1 element