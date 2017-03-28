import React from 'react';
import cors from 'cors';
//import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
import Home from '../imports/ui/home.js';
import Leaderboard from '../imports/ui/leaderboard.js';
import Leagues from '../imports/ui/leagues.js';
import Welcome from '../imports/ui/welcome.js';
import Profile from '../imports/ui/profile.js';

Meteor.startup(() => {
  render(<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='leaderboard' component={Leaderboard}/>
      <Route path='home' component={Home}/>
      <Route path='leagues' component={Leagues}/>
      <Route path='profile' component={Profile}/>
    </Route>
  </Router>, document.getElementById('render-target'));
});
