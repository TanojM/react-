// 1
/*import React from "react";
import ReactDom from "react-dom";

const name = "Angela";
const name2 = "Yu";
//var myNumber =Math.random();
//myNumber = Math.floor(myNumber * 6 +1);
const myStyles = { color : 'grey',
   	               fontSize : '5rem',
   	               border:'1px solid black',
   	               textAlign:'center'}
	
ReactDom.render(
  <div>
   <h1 className='heading' 
   style={myStyles}>Hello {name + " " + name2}!</h1>
   <ul>
    <li>Sandwich</li>
    <li>Pizza</li>
    <li>Burger</li>
   </ul> 

  </div> , 
  document.getElementById('root')
	)
  // <h1>Hello {name + " " + name2 }!</h1>
  //  <p> Your lucky number is {myNumber} </p>

// 2
/*import React from "react";
import ReactDom from "react-dom";

 const fname = "Mickey";
 const lname = "Mouse";
 var myDate =new Date();
 var year = myDate.getFullYear();
 console.log(year);

ReactDom.render(
  <div>
   <p>Created by {fname +" "+ lname}</p>
   <p> Copyright {year} </p>
  </div>, 
  document.getElementById('root')
	)*/


/*import React from 'react';
import ReactDom from 'react-dom';

var myDate = new Date(2020 ,1,1,13);
myDate = myDate.getHours();
var greeting;
let myStyles={color :""};
console.log(myDate);
if (myDate < 12 ) {
	greeting = "Good Morning";
	myStyles.color="red";
}else if(myDate < 18){
	greeting="Good Afternoon";
	myStyles.color="green";
}else{
	greeting = "Good Night";
	myStyles.color="blue";
}

ReactDom.render(
   <div> <h1 className="heading" style={myStyles}>{greeting} </h1></div>,
   document.getElementById('root')
	)
*/

/*
import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/menu";
import Mylist from "./components/list";

ReactDom.render(
  <div>
   <Heading />
   <Mylist />
  </div>,
  document.getElementById('root')
	)*/

/*import React from 'react';
import ReactDom from 'react-dom';
import * as data from './components/App';

console.log(data);
ReactDom.render(
   <div>
     <ul>
      <li>{data.add(2,4)}</li>
      <li>{data.sub(8,5)}</li>
      <li>{data.multiply(9,4)}</li>
      <li>{data.divide(12,4)}</li>
     </ul>
   </div>,
   document.getElementById('root')
	)*/

/*import React from "react";
import ReactDom from "react-dom";
import Greeting from "./components/Header";
import * as data from "./components/App";

ReactDom.render(
	<div>
    <Greeting />
     <ul>
      <li>{data.add(2,4)}</li>
      <li>{data.sub(8,5)}</li>
      <li>{data.multiply(9,4)}</li>
      <li>{data.divide(12,4)}</li>
     </ul>
     </div>
    ,document.getElementById('root')
	)*/

 // emoji , student-datatable , keeper-app~~~~~~
 
// import React from "react";
// import ReactDom from "react-dom";
// import App from './components/App';

// ReactDom.render(
//   <div>
//      <App />
//   </div>,
//   document.getElementById('root'));

// import React from "react";
// import ReactDom from "react-dom";
// import App from './components/App';

// ReactDom.render( 
//       <div>
//       <App />
//       </div>,
// 	document.getElementById('root'))



// class-Component practice
// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './class-components/App';

// ReactDom.render(
//     <React.Fragment>
//      <App />
//      </React.Fragment>,
//     document.getElementById('root'))



// movie database file
// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './class-components/movieCollection/App';

// ReactDom.render(
//     <React.Fragment>
//     <BrowserRouter>
//      <App />
//      </BrowserRouter>
//      </React.Fragment>,
//     document.getElementById('root'))


// route component
// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './route-component/App';

// ReactDom.render(
//     <React.Fragment>
//      <BrowserRouter>
//       <App />
//      </BrowserRouter>  
//     </React.Fragment>,
//      document.getElementById('root')
//   );




// Test !!!!!!

import React from 'react';
import ReactDom from 'react-dom';
import App from './Test/App';

ReactDom.render(
   <React.Fragment>
    <App />
   </React.Fragment>,
   document.getElementById('root')
  );