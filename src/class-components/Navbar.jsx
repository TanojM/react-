import React from 'react';

function NavBar(props){
	return(
     <div>
      <nav className='navbar navbar-nav navbar-dark bg-dark'>
       <div className='container'>
        <a className='navbar-brand' href='#'>NavBar</a>
        <h5 style={{color : 'white'}}>Total Items in Cart 
        <span className='badge badge-light' style={{fontSize:'1.3rem',margin:'0.3rem'}}> {props.TotalCount} </span></h5>
       </div>
      </nav>
     </div>
	)
}

export default NavBar;