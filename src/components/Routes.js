import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContainer from './user/UserContainer';
import Profile from './profile/Profile';
import { Provider } from 'react-redux';
import store from '../createStore';
import 'bootstrap/dist/css/bootstrap.css'

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserContainer}/>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;