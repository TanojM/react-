import React from 'react';

function FirstPg(){
	return(
     <div>
      <h1>Add Your Favourite Movies </h1>
       <div className='container'>
       <form style={{border:'1px solid grey', margin:'1rem'}} >
       <center>
       
        <div className='form-group'>
        <label><strong> Movie Name </strong></label>
        <input className='form-control col-sm-5' type='text' name='movie' placeholder='Movie Name...' />
        </div>

        <div className='form-group'>
        <label><strong> Gener </strong></label>
        <input className='form-control col-sm-5' type='text' name='gener' placeholder='...Movie Type' />
        </div>

        <div className='form-group'>
        <label><strong> Year </strong></label>
        <input className='form-control col-sm-5' type='number' name='year' placeholder='...Movie Initial release' />
        </div>
        
        <div className='form-group'>
        <label><strong> Rank </strong></label>
        <input className='form-control col-sm-5' type='number' name='rank' placeholder='...Movie Ranking.' />
        </div>
        
        <button className='btn btn-primary btn-lg' style={{margin:'1rem'}}> Add </button>
        </center>
       </form>
       </div>
     </div>
	)
}
export default FirstPg;