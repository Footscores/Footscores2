import React from 'react';
//import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';
import Home from '../imports/ui/home.js';
import Leaderboard from '../imports/ui/leaderboard.js';
import Leagues from '../imports/ui/leagues.js';
import Welcome from '../imports/ui/welcome.js';

Meteor.startup(() => {
  render(<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='leaderboard' component={Leaderboard}/>
      <Route path='home' component={Home}/>
      <Route path='leagues' component={Leagues}/>
    </Route>
  </Router>, document.getElementById('render-target'));
});
