import React from "react";

function clicked(){
alert("Edit the Note");
}

function Keeper(props){
 	return(
     <div className="Mydiv" onClick={clicked}>
     <h3>{props.title}</h3>
     <p>{props.reminder}</p>
     </div>
	);
}
export default Keeper;