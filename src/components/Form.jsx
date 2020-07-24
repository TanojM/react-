/*
import React , { useState } from 'react';

function Form(){
const [fullName , setfullname] = useState({
	fName : '',
	lName : '',
	email : ''
});

 function handleChange(event) {
    const {name , value} = event.target;
    setfullname(prevValue =>{
       return{
           ...prevValue,
          [ name ] : value,
       }
      })
  }

   function handleClick(e){
    e.preventDefault();
    let Full = fullName.fName + " " + fullName.lName;
    alert(Full);
    window.location.reload();
   }

	return(
      <div className='FormClass'>
        <h1>Hello {fullName.fName} {fullName.lName}...</h1>
        <p>{fullName.email}</p>
       <form className='FormPart'>
        <input type='text' placeholder='First Name...' name = 'fName' value = {fullName.fName} onChange = {handleChange}/><br />
        <input type='text' placeholder='Last Name...' name = 'lName' value = {fullName.lName} onChange = {handleChange}/> <br />
        <input type='email' placeholder='sampl@email.com' name = 'email' value = {fullName.email} onChange = {handleChange}/> <br />
        <button onClick= {handleClick}>Submit</button>
       </form>
      </div>
	)
}
export default Form;
*/


import React , { useState } from 'react' ;

function Todo(){
 const [InputText , setInputText]	= useState('');
 const [items , setItems] = useState([]);

 function handleChange(event){
 const value = event.target.value;
 setInputText(value);
 }

function addItem(event){
	event.preventDefault();
	setItems(preValue => {
	  if(InputText === '') {
	   alert('List is empty');
	   return(
	   [...preValue] )
	  } else{
        return [...preValue , InputText] }
	})
setInputText('');
}


 return(
   <div>
    <h1>To-Do List </h1>
    <input type="text" name="content" value={InputText} onChange={handleChange}/>
    <button onClick={addItem}>Add </button>
     <ul>
       {items.map( (todoitem) => <li>{todoitem}</li> )}
     </ul>
   </div>
	)

}
export default Todo;
