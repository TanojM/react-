import React from 'react';

function SideNav(){
	return(
       <div className='Mynav col-lg-2 col-md-3 col-sm-3'>
        <nav>
         <ul class="nav flex-column">
          <li class="nav-item">
           <span>🏠</span> Home
          </li>
		  <li class="nav-item">
		   <span>📒</span>Dashboard
		  </li>
		  <li class="nav-item">
		   <span>☎️</span>Contact
		  </li>
		  <li class="nav-item"> 
		  <span> !ℹ️</span>Help
		  </li>
		 </ul>
        </nav>
       </div>
	)
}
export default SideNav;