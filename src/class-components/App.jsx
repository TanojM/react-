/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, { Component } from 'react';
import Navs from '../class-components/Navbar'
import TestData from '../class-components/Testing1'

class Sample extends Component {
	 state = {
      count : [
        {id :1, value:0, name:'Daawat Devaaya Basmati Rice 5kg'},
        {id :2, value:0, name:'Tata Sampann Unpolished Toor Dal/Arhar Dal 1kg'},
        {id :3, value:0, name:'Vedaka Cumin (Jeera) Seed, 200g'},
        {id :4, value:0, name:'Tata Salt, 1kg'},
        {id :5, value:0, name:'Maggi 2 Minutes Masala Noodles, 420g'}
       ]
   }
    
    Increment = (counter) =>{
     const Inc = [...this.state.count];
     const index = Inc.indexOf(counter);
     Inc[index] = {...counter};
     Inc[index].value++;
     this.setState({count : Inc})  
    
    }
    
    Decrement = (counter) =>{
     const Del = [...this.state.count];
     const index = Del.indexOf(counter);
     Del[index] = {...counter};
     Del[index].value--;
     this.setState({count : Del})  

    } 

    handleDelete = counterId => {
     console.log('deleted',counterId)
     const DelVal = this.state.count.filter(c => c.id !== counterId) ;
     this.setState({count : DelVal})
    }

    handleReset = () =>{
     const Reset = this.state.count.map(c => {console.log(c.id);c.value = 0;
     return c;})
     this.setState({count : Reset})
    }

	render(){
      return (
       <div>
       <Navs 
         TotalCount = {this.state.count.filter(t => t.value > 0).length}
       />
       <TestData
         counters = {this.state.count}
         onInc = {this.Increment}
         onDec = {this.Decrement}
         clickDel = {this.handleDelete}
         clickRes = {this.handleReset}
        />
       </div> 
       );
	}
}

export default Sample;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~movie database~~~~~~
import React, { Component } from 'react';
import TableData from '../class-components/movieCollection/Table';

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
