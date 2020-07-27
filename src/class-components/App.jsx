/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, { Component } from 'react';

class Sample extends Component {
	state = {
	  count : 0
	}
   styles = {
    margin : '1rem'
   }

   badgeViews(){
   let Myclass = 'badge badge-';
	  Myclass += (this.state.count <=0) ? 'danger' : 'warning'
	return Myclass  
  }

	render(){
	 
      return (
       <div>
        <h1>Hai</h1>
         <span className = {this.badgeViews()} style = {this.styles}><h2>{this.state.count}</h2></span> <br/>
        <button className = 'btn btn-primary' onClick={this.Increment} style={{margin:'1rem'}}> + </button>
        <button className = 'btn btn-primary' onClick={this.Decrement} style={{margin:'1rem'}}> - </button>
       </div> 
       );
	}
  
  Increment = () => {
   this.setState({count : this.state.count + 1})
  }
  Decrement = () => {
   this.setState({count : this.state.count - 1})
  } 

}

export default Sample;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, { Component } from 'react';
import TableData from '../class-components/Table';

class MyMovies extends Component {
	render(){
	 return(
       <React.Fragment>
        <TableData />
       </React.Fragment> 
	 )
	}
}
export default MyMovies;