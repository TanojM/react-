import React from "react";

function Contentbody(props){
	return(
     <div className="Emojidiv">
      <span id="image" role="img">{props.emoji}</span>
      <h3>{props.name}</h3><hr/>
      <h4>{props.meaning}</h4>
     </div>
	);
}
export default Contentbody;