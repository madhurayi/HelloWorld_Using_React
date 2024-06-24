import React from "react"
import ReactDOM from "react-dom/client"
const parent=React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id:"child"},
        [ React.createElement(
            "h1",
            {id:"h1"},
            "I am h2 tag"
        ),
        React.createElement(
            "h2",
            {id:"h2"},
            "I am madhu"
        ),
        ,
        React.createElement(
            "h3",
            {id:"h2"},
            "I am priya"
        )]
    )
)

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));  

root.render(parent);  //render will take javascript object and convert it into dom that is understood by browser.


// const heading=React.createElement(
//     "h1",   //this is element
//     {id:"heading",xyz:"abc"}, //we can set arributes in key values pairs
//     "Hello World" //This is the content which we want inside element
// );

// console.log(heading); //It wont print h1 tag, it is a React element or javascript object

// const root= ReactDOM.createRoot(document.getElementById("root"));  

// root.render(heading);  //render will take javascript object and convert it into dom that is understood by browser.