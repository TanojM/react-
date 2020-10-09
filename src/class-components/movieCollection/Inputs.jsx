import React from 'react';

function Input(props) {
 return(
     <div className='form-group'>
      <label htmlFor={props.id}><strong> {props.label} </strong></label>
      <input className='form-control col-sm-5' id={props.id} type={props.type} name={props.name} 
       placeholder={props.placeholder} onChange={props.onChange} />
     </div>
 )	
}

export default Input;