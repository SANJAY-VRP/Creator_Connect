// routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import Erichal from './Erichal';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUpForm} />
        <Route path="/profile" component={Erichal} />
      </Switch>
    </Router>
  );
}

export default Routing;
