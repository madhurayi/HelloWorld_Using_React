import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const TitleElement =()=> {
    return (
        <h1 className="head" tabIndex={1}>Namasthe React Using JSX</h1>
    )
}; // Assuming you want an h1 element
console.log(TitleElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingElement= ()=>(
    <div id="container"> 
        <TitleElement/>
        <h1 className="heading">Namasthe React Functional Component</h1>
    </div>
    

)

root.render(<HeadingElement/>); // Render the h1 element