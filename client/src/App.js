import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-dom'; 
import Navbar from './components/layouts/Navbar';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
      </header>
    </div>
  );
}

export default App;
