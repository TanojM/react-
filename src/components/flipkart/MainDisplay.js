import React , { useState } from 'react';
import Products from './Products';
import Description from './Description';

function MainDisplay(){
 const [product ,setProduct] = useState(Products);
 
 function GetData(data){

  return(
     <div>
      <div className='row'>
      <div className = 'col-lg-3 col-md-3 col-sm-12'>
      <div className='card'>
      <h2>{data.name}</h2>
      <div className='card-image'>
       <img src={data.image} width='300' height='300'  alt={data.name}/>
      </div> 
       <div className='card-body'>
       <h4>Price: {data.Price} /-</h4>
       <h4>{data.memory}</h4>
       </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
         View
        </button>
      </div>
      </div>
      </div>

      <Description />
     </div>  
  	)
  }
 
	return(
      <div>
        <h1>Latest Smartphones</h1>
        {product.map(GetData)}
      </div>
		)
}
export default MainDisplay;