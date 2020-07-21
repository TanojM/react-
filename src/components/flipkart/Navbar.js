import React from 'react';

function NavigationBar(){
	return(
         <div className='container'>
         <nav className='navbar'>
           <a className='navbar-brand' href='#'>Flipkart</a>
           <div>
            <input type='text' placeholder='Search for product,brands and more' />
            <button>Search</button>
           </div>
           <div className='NavList'>
             <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' here='#'>Log-In</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' here='#'>More</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' here='#'>Cart</a>
              </li>
             </ul>
           </div>
         </nav>
         </div>
		)
}
export default NavigationBar;


// used 
// * navbar
// *navbar-brand
// *navbar-nav
// *nav-item
// *nav-link