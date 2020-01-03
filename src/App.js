import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Wizard from './Components/Wizard/Wizard';
import routes from '../src/routes';


function App() {
  return (
    <Router>  
      <div className="App">
        <div><Header /></div>
        <div><Link to='/'><button>Dashboard</button></Link></div>
        <div><Link to='/wizard'><button>Wizard</button></Link></div>
      </div>
    </Router>  
  );
}

export default App;
