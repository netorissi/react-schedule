import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
