import React from "react";

let date = new Date();
date = date.getFullYear();

function Myfooter(){
	return(
     <footer>Copyright © {date}</footer>
	);
}
export default Myfooter;