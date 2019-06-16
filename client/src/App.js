import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import LinkState from './context/link/LinkState';
import './App.css';
import AuthState from './context/auth/authState';


const App = () => {
  return (
    <AuthState>
      <LinkState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </LinkState>
    </AuthState>
  )
}

export default App;
