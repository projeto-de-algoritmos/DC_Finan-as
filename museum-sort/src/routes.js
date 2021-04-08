import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sculptures from './pages/Sculptures';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sculptures/:id" component={Sculptures} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
