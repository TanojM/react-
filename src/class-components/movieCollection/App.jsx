import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Addmovie from './Addmovie';
import Nav from './Mainnav';
import Edit from './Edit'
import MovieTable from './Table'

class App extends Component{
	render(){
	  return(
       <React.Fragment>
        <Nav />
        <Switch>
         <Route path='/Addmovie' component={Addmovie} />
         <Route path='/Edit' component={Edit} />
         <Route path='' component={MovieTable} />
        </Switch>
       </React.Fragment>
	  )
	}
}
export default App;