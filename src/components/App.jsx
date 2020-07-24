/*function add(a , b){
	return a+b;
}
function sub(a , b){
	return a-b;
}
function multiply(a , b){
	return a*b;
}
function divide(a , b){
	return a/b;
}

export {add, sub, multiply, divide};
*/

/*  Students - Datatable~~~~~~~~~~~~~~~~~~~~
import React from "react";
import Data from "../components/Studentsdata";
import studentinfo from "../Studentsdata";

function Newdata(contact){
	return(
	<Data 
	key={contact.name}
        name ={contact.name}
        branch = {contact.branch}
        sem = {contact.sem}
        usn ={contact.usn}
       /> 
	);
}

function Getdata(){
	return(
     <div>
      <h1>Students Details</h1>
      {studentinfo.map(Newdata)}
     </div>
	);
}
export default Getdata;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/* emoji app ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* import React from "react";
import Entry from "../components/emoji/Emojidetails";
import emojies from "../components/emoji/Emojicontent";

console.log(emojies);

function Getcontent(data){
  console.log(data);
	return(
     <Entry
        key ={data.id}
        name = {data.name}
        emoji = {data.emoji}
        meaning = {data.meaning}
     />
	);
}
function Emojidisplay(){
	return(
      <div>
       <h1 className="Mainhead">emojipedia</h1>
        {emojies.map(Getcontent)}
       </div>
	);
}

export default Emojidisplay;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*Keeper App ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from "react";
import Header from "../components/Keeperapp/Headingkeep";
import Footer from "../components/Keeperapp/Footerkeep";
import Note from "../components/Keeperapp/Keeper";
import Newnotes from "../components/Keeperapp/notes";

function Reminders(data){
console.log(data);
  return(
      <Note 
       key = {data.id}
       title = {data.title}
       reminder = {data.reminder}
      />
  );
}

function Getnote(){
  return(
  <div>
      <Header />
       {Newnotes.map(Reminders)}
      <Footer />
  </div>
  );
}
export default Getnote;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*  form log-in ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from 'react';
import Formdata from '../components/loginapp/login';

var isloged = true;

function Final(){
  return(
  <div className = 'container'>
   <Formdata 
    log = {isloged}
    />
  </div> 
  );
}
export default Final;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

/* practice use-State hooks~~~~~~~~~~~~~~~~~~~~~~

import React, { useState } from 'react';

function Main(){
var [count , setCount] = useState(0);

console.log(count);

function Incr(){ 
setCount(count + 1)
}

function Decr(){ 
setCount(count - 1)
}
  return(
      <div>
       <h1>Count : {count}</h1>
       <button onClick={Decr}>-</button>
       <button onClick={Incr}>+</button>
      </div> 
       );
}
export default Main;
*/

/*  Get-Time~~~~~~~~~~~~~~~~~~~~~
import React,{ useState } from 'react';

function Gettime(){
  var time1 = new Date();
  var [time , setTime] = useState(time1.toLocaleTimeString())

function Newtime(){
  var newtime = new Date();
  newtime = newtime.toLocaleTimeString();
  setTime(newtime);
}
setInterval(Newtime,1000)
  return(
    <div>
    <h1>{time}</h1>
    <button onClick={Newtime}>Get Time</button>
    </div>
  )

}

export default Gettime;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


import React from "react";
import Form from '../components/Form';

function Formdata(){
  return(
    <div className="container">
      <Form />
    </div>
  )
}

export default Formdata;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from 'react';
import MainDisplay from '../components/flipkart/MainDisplay'

function App(){
  return(
   <div>
    <h1>Hi</h1>
    <MainDisplay />
   </div>
  )
}
export default App;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/