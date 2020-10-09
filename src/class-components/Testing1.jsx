import React, { Component } from 'react';
import Test from '../class-components/Testing2';

class SubMain extends Component {
  	render() {
	  return(
        <React.Fragment>
         <center><button className= 'btn btn-primary btn-lg' onClick={this.props.clickRes} style={{marginTop:'0.3rem'}}>Reset</button></center>
          {this.props.counters.map(counts =>
           <Test 
	           key={counts.id} 
               counter = {counts}
               onDelete = {this.props.clickDel}
               onIncre = {this.props.onInc}
               onDecre = {this.props.onDec}
           />)}
        </React.Fragment>
	  );
	}
}
export default SubMain;