import React from 'react';

function SideNav(){
	return(
       <div className='Mynav col-lg-2 col-md-3 col-sm-3'>
        <nav>
         <ul className="nav flex-column">
          <li className="nav-item">
           <span>🏠</span> Home
          </li>
		  <li className="nav-item">
		   <span>📒</span>Dashboard
		  </li>
		  <li className="nav-item">
		   <span>☎️</span>Contact
		  </li>
		  <li className="nav-item"> 
		  <span> !ℹ️</span>Help
		  </li>
		 </ul>
        </nav>
       </div>
	)
}
export default SideNav;