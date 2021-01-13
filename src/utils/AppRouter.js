import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import SimpleComponent from '../components/SimpleComponent';

export default function AppRouter(props) {
  return (
    <Switch>
      <Route path="/FSHOnline/share/test" exact component={SimpleComponent} />
      <Route path="/FSHOnline/share/:text" component={App} />
      <Route path="/FSHOnline/test" exact component={SimpleComponent} />
      <Route path="/FSHOnline" exact component={App} />
    </Switch>
  );
}
