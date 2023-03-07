import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

//-----------------------------| React Component |-----------------------------------------------------------------------------------

ReactDOM.render(<App />,document.getElementById('root'));

// import ReactDOM from 'react-dom/client';
//-------------------------------------------------------------------------------------------
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
--------------------------------------------------------------------------------
const React = require('react');
const ReactDOM = require('react-dom');

PURE Java Script
const h1 = document.createElement('h1');
h1.innerHTML = 'Hello Balaguru';
document.querySelector('#root').appendChild(h1);
// REACT---------------------------------------------------------------------------------------

const fName = 'Balaguru';
const lName = 'Raja'
const lucky = 2;
ReactDOM.render(
<div>
  <h1>Hello {`${fName} ${lName}`}</h1>
  <p> your lucky number is {Math.floor(Math.random() * 5)}</p>
</div>
,document.querySelector('#root'));

//---------------------------| ADD IMAGE |----------------------------------
const name = 'Balaguru';
const curYear = new Date()
// const year = curYear.getFullYear();

const img = 'https://picsum.photos/200'
 
ReactDOM.render(
<div>
  <h1 className="heading" contentEditable = "true" spellCheck = "false">Created by {name}</h1>
  <img src={`${img}?grayscale`} alt="test person" />
  <h1 style ={{color : "blue"}} >Copyright {curYear.getFullYear()}</h1>
</div>
,document.querySelector('#root'));

---------------------------| INLINE STYLES |-----------------------------------------------------------

const name = 'Balaguru';
const curYear = new Date()

// use object type insert styles

const css = {
  color : "red",
  fontSize : "50px",
  border : "1px solid black",
};

css.color = 'blue' // change css

ReactDOM.render(
<div>
  <h1 className="heading" contentEditable = "true" spellCheck = "false">Created by {name}</h1>
  <h1 style ={css} >Copyright {curYear.getFullYear()}</h1>
</div>
,document.querySelector('#root'));

-------------------------------| challenge myself - good- morning/afternoon/night |--------------------------------------------------
const hour = new Date().getHours();

// console.log(hour);

let season;
if (hour >= 1 && 12 > hour) season = 'Morning';
if (hour > 12 && 18 >= hour) season = 'Afternoon';
if (hour > 18 && 24 >= hour) season = 'Night';

let color;

if (hour >= 1 && 12 > hour) color = {color : 'red'};
if (hour > 12 && 18 >= hour) color = {color : 'green'};
if (hour > 18 && 24 >= hour) color = {color : 'blue'};

ReactDOM.render(<h1 className="heading" style={color}>Good {season}</h1>,document.getElementById('root'));
------------------------------------------------------------------------------------------------------------------

const date = new Date(2023, 1, 1, 17);
const curTime = date.getHours();

let greeting;

const customStyle = {
  color : ""
}

if(curTime < 12) {
  greeting = 'Good Morning';
  customStyle.color = 'red';
} else if(curTime < 18) {
  greeting = 'Good Afternoon';
  customStyle.color = 'green';
} else {
  greeting = 'Good Night';
  customStyle.color = 'blue';
}


ReactDOM.render(<h1 className="heading" style={customStyle}>{greeting}</h1>, document.getElementById('root'));
*/


















