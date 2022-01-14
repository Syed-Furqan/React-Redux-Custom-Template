import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;