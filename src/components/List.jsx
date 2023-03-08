import React from 'react';

const add = function (num1,num2) {
  return num1 + num2;
}

const multiply = function (num1,num2) {
  return num1 * num2;
}

const subtract = function (num1,num2) {
  return num1 - num2;
}

const divide = function (num1,num2) {
  return num1 / num2;
}

const List = function () {
  return <ul>
    <li> {add(1,2)} </li>
    <li> {multiply(2,3)} </li>
    <li> {subtract(7,2)} </li>
    <li> {divide(5,2)} </li>
  </ul>
}

export default List;