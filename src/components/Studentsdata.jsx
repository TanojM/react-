import React from "react";

function Studentdata(props){
console.log(props);
	return(
	 <div className="Details">
      <h2>Name : {props.name}</h2>
      <ul className="Datalist">
       <li>{props.branch}</li>
       <li>{props.sem}</li>
       <li>{props.usn}</li>
      </ul>
      <br/>
      </div>
	);
}
export default Studentdata;