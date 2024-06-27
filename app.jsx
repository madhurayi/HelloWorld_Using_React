import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const hed = <h1 className="head">namastereact</h1>; // Assuming you want an h1 element
console.log(hed);

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingElement= ()=>(
    <div id="container">
        <h1 className="heading">Namasthe React Functional COmponent</h1>
    </div>
    

)

root.render(<HeadingElement/>); // Render the h1 element