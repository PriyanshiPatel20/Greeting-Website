import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let curDate = new Date(2023,7,11,14);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};



if(curDate >=1 && curDate < 12){
  greeting = "good morning";
  cssStyle.color = "green";
}
else if (curDate>=12 && curDate < 19){
  greeting = "good afternoon";
  cssStyle.color = "orange";
}

else{
  greeting = "good night";
  cssStyle.color = "black";
}


ReactDOM.render(
  <>
  <h1> HElloo Sir! <span style={cssStyle}>{greeting}</span></h1>,
  </>,
document.getElementById("root")

  
);

