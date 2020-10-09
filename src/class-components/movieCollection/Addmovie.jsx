import React, { Component } from 'react';
import Input from './Inputs';
import Data from './DataTable';

console.log(Data)
class FirstPg extends Component{
   state = {
      movies : {
       id : '',
       name : '',
       gener : '',
       year : ''
      }
   }

Handlechange = (event) =>{
 const {name, value} = event.target;
 this.setState((preValue) => { 
   return{
    ...preValue,
    [name] : value,
   }
   })
}

AddMovie = (e) => {
 e.preventDefault();
 console.log(this.state.movies)
}

 render(){
 
	return(
     <div>
      <h1>Add Your Favourite Movies </h1>
       <div className='container'>
       <form style={{border:'1px solid grey', margin:'1rem'}} >
       <center>
       
        <Input
         type = "text"
         label='Movie Name'
         name = 'name'
         id = 'MovieName'
         placeholder = "..Enter the Name.."
         value={this.state.movies.name}
         onChange = {this.Handlechange}
          />
       
        <Input
        type = "text"
        label='Movie Gener'
         name = 'gener'
         id = 'MovieGener'
         value={this.state.movies.gener}
         placeholder = "..Enter the Movie Gener.."
         onChange = {this.Handlechange}
          />
       
        <Input
        type = "number"
        label='Year'
         name = 'year'
         id = 'MovieYear'
         value={this.state.movies.year}
         placeholder = "..Enter the release year.."
         onChange = {this.Handlechange}
          />
       
        <Input
        type = "number"
        label='Rank'
         name = 'rank'
         id = 'MovieRank'
         value={this.state.movies.id}
         placeholder = "..Enter the Ranking.."
         onChange = {this.Handlechange}
          />
        
        <button className='btn btn-primary btn-lg' style={{margin:'1rem'}} onClick={this.AddMovie}> Add </button>
        </center>
       </form>
       </div>
     </div>
	)
 } 
}
export default FirstPg;