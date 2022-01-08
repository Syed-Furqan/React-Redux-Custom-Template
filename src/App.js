import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from './routes/routes'
import './App.css'
import Test from './Test/Test'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/test' component={Test}/>
          {routes.map(({ path, Component, props }) =>
            <Route key={path} path={path} component={Component} {...props} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;