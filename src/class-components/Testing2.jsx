import React, { Component } from 'react';

class Test extends Component {
   
   styles = {
      margin : '0.6rem',
      fontSize : '1rem'
    }
    
    badgeBgcolor = () => {
     let getClass = 'badge badge-';
       return(
     getClass += (this.props.counter.value === 0) ? 'warning' : 'primary' )
    }

    render(){
	 return(
       <React.Fragment>
        <h3>
         <strong>{this.props.counter.id}. {this.props.counter.name}</strong> 
         <small><span className='badge badge-dark m-1'>Qty</span></small>
         <span className={this.badgeBgcolor()} style = {this.styles}>{this.props.counter.value}</span>
        </h3>
        <button className='btn btn-dark' style = {this.styles} 
          onClick = {() => this.props.onDecre(this.props.counter)} 
          disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-
        </button>
        <button className='btn btn-dark' style = {this.styles} onClick = {() => this.props.onIncre(this.props.counter)}>+</button>
        <button className='btn btn-danger' style = {this.styles} 
         onClick = {() => this.props.onDelete(this.props.counter.id)}> Delete</button>
        
       </React.Fragment>
	 )
	}
}
export default Test;