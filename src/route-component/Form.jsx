import React, { Component } from 'react';
import Input from './Inputs';

class Form extends Component{
	render(){
	  return(
        <div>
         <Input 
          autoFocus
          label='FirstName'
          type='text'
          name='firstname'
          id='Fname'
          placeholder='Enter ur firstname'
         />
         <Input 
          label='LastName'
          type='text'
          name='lastname'
          id='Lname'
          placeholder='Enter ur lastname'
         />

        </div>
	  )
	}
}
export default Form;