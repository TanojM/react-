import React from 'react';

export function SearchBar(props){
	return(
      <div>
       <form className='form-inline m-3'>
        <input className='form-control mr-sm-2' 
               type='search' 
               placeholder='Search Name..' 
               name='Search'
               onChange={props.onChange} 
         />
       </form>
      </div>
	)
}