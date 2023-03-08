import React from 'react';

/*const Heading = function () {
  return <h1>My name is Bala Guru</h1>
}

export default Heading;
*/
//-----------------------------------------------------------------------------------------------
const Heading = function() {

const date = new Date();
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

return <h1 className="heading" style={customStyle}>{greeting}</h1>
}

export default Heading;