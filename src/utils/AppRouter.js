import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import SimpleComponent from '../components/SimpleComponent';

export default function AppRouter(props) {
  return (
    <Switch>
      <Route path="/share/test" exact component={SimpleComponent} />
      <Route path="/share/:text" component={App} />
      <Route path="/test" exact component={SimpleComponent} />
      <Route path="" exact component={App} />
    </Switch>
  );
}
