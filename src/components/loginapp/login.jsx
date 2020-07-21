import React from "react";
import Input from './input';

function Formdata(props){
   
  function handleChange(e){
  console.log('changed');
}


	return(
      <form className = "Myform">
   <h1>Hello..!</h1>
       <Input 
         type = "text"  
         placeholder = "Username"
         onChange = {handleChange}
        />

        <Input 
         type = "password"  
         placeholder = "Password"
        />
         
         {!props.log && (<Input  type="password" placeholder= "confirm password"/>)}
         


       <button className="Mybtn" onClick={handleClick}>{props.log ? "Login" : "Register"} </button>
       </form>
	);
}
function handleClick(e){
  e.preventDefault()
  console.log('worked');
}
export default Formdata;