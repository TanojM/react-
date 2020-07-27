import React, { Component } from 'react';
import { getMovie } from '../class-components/DataTable';

class Table extends Component{
   state = {
     movie : getMovie()
   }
  
   deleteMovie = (film) => {
    const newMovies = this.state.movie.filter(nm => nm.id !== film.id);
    this.setState({movie : newMovies});
   } 
   
  addMovie=()=>{
     let movieId = prompt("Rank in your list");
     let movieName = prompt("Movie Name");
     let movieYear = prompt ('Movie Year');
     let movieGener = prompt ('Movie Gener');
     
     let newMovie = [{
       id : movieId,
       name : movieName,
       gener : movieGener,
       year : movieYear
     }];
       let List1 = this.state.movie;
       if (movieName === '' || movieId === '' || movieYear === '' || movieGener === '')
       return alert('!!!Failed to Add.... All Fields Must be Filled')
       
       let combine = [...List1, ...newMovie];
      return (
       this.setState({movie : combine})
      )
    }

  	render(){
  	 const len = this.state.movie.length;
  	 if(len === 0) 
  	 return <h1><center>!!!!Movie Database Is Empty</center></h1>

	 return (
      <div>      
       <h1>Movie Collections</h1><hr/>
       <h3><center>Total Movies in Database {len}</center></h3><hr/>
        <center> <button className="btn btn-primary" style={{margin:'1rem', width:'20rem'}} 
        data-toggle="modal" data-target="#exampleModal" onClick={this.addMovie}>
             Add Movies</button> </center>
       <table className="table">
       <thead>
	    <tr>
	      <th scope="col">Year</th>
	      <th scope="col">Name</th>
	      <th scope="col">Gener</th>
	      <th scope="col"></th>
	    </tr>
	   </thead>
	   <tbody>
	    {this.state.movie.map(film => 
	      <tr key={film.id}>
	       <th scope="row">{film.year}</th>
	       <td>{film.name}</td>
	       <td>{film.gener}</td>
	       <td>
	        <button className='btn btn-primary' onClick={() => this.deleteMovie(film)}>Delete</button>
	       </td>
	      </tr> 
	     )}
	   </tbody>
	  </table>
      </div>
	 );
	}
}
export default Table;