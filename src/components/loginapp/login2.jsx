import React from "react";
import Input from './input';

function Startdata(){
	return(
      <form className = "Myform">
       <Input 
         type = "text"  
         placeholder = "Username"
        />

        <Input 
         type = "password"  
         placeholder = "Password"
        />

        <Input 
          type="password"
          placeholder= "confirm password"
         />

       <button className="Mybtn" type="submit"> Register </button>
       </form>
	);
}
export default Startdata;