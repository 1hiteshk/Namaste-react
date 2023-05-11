import React from "react";
import ReactDOM  from "react-dom";

const heading = React.createElement("h1",{ id : "heading", xyz:"abc"},"hello world from react ");

const parent = React.createElement("div",{id:"parent"},
               [React.createElement("div",{id:"child"},[React.createElement("h1",{},"hi im in h1"),React.createElement("h2",{},"hey im in h2")]),
               React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hi im in h1"),React.createElement("h2",{},"hey im in h2")]) ] 
               );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);