/*
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Page1';
import Product from './Page2';
import Feature from './Page3';
import Contact from './Page4';
import Notfound from './Notfound';
import Nav from './Nav';

class App extends Component {
	render(){
	  return(
        <div>
         <Nav />
         <div className='content'>
          <Route path='/Page1' exact render={(props) => <Home {...props}/>} />
          <Route path='/Page2' render={(props) => <Product {...props}/>} />
          <Route path='/Page3' render={(props) => <Feature {...props}/>} />
          <Route path='/Page4' render={(props) => <Contact {...props}/>} />
          <Route path='/notfound' component={Notfound} />
          <Redirect from='/' to='/Page1' />
          </div>
        </div>
	  )
	}
}

export default App;
*/

/* app component for Forms*/

import React, { Component } from 'react';
import Form from './Form';

class App extends Component{
  render(){
    return(
     <React.Fragment>
      <Form />
     </React.Fragment>
    )
  }
}
export default App;