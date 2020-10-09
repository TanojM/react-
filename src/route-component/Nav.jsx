import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
	return(
      <div>
       <nav className="navbar-nav">
        <p>NavBar</p>
        <ul>
         <li className='nav-item'><Link className='nav-link' to="/Page1">Home</Link></li>
         <li className='nav-item'><Link className='nav-link' to="/Page2">Product</Link></li>
         <li className='nav-item'><Link className='nav-link' to="/Page3">Feature</Link></li>
         <li className='nav-item'><Link className='nav-link' to="/Page4">Contact</Link></li>
        </ul>
       </nav>
      </div>
	)
}
export default Nav;