import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './containers/Login'
import Register from './containers/Register'
import Dashboard from './containers/Dashboard'
import Welcome from './containers/Welcome'
import Home from './containers/Home'
import OtpGenerate from './containers/OtpGenerate';

function App() {

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/otpGenerate" component={OtpGenerate} />
      </Switch>
  </Router>
  );
}

export default App;
