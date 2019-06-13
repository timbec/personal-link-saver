import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home'; 
import About from './components/pages/About'; 

import LinkState from './context/link/LinkState'; 
import './App.css';

 
const App = () => {
  return (
      <LinkState>
          <Router>
            <Fragment>    
              <Navbar />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                </Switch>
          </Fragment>
        </Router>
      </LinkState>   
  )
}

export default App;
