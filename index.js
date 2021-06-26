import React from "react";
import ReactDOM from "react-dom";

const fname="guriya";
const lname="kumari";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
ReactDOM.render
(
<>
<h1>{`my name is${fname}${lname}`}</h1>
<p>{`The current date is${currdate}`}</p>
<p>{`The current time is ${currtime}`}</p>



</>,
document.getElementById("root")
);