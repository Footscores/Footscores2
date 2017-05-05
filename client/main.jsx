/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-unused-vars, no-undef
*/
import React from 'react';
import cors from 'cors';
// import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Home from '../imports/ui/home.jsx';
import Leaderboard from '../imports/ui/leaderboard.jsx';
import Leagues from '../imports/ui/leagues.jsx';
import Welcome from '../imports/ui/welcome.jsx';
import Profile from '../imports/ui/profile.jsx';

Meteor.startup(() => {
  render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="leaderboard" component={Leaderboard} />
      <Route path="home" component={Home} />
      <Route path="leagues" component={Leagues} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>, document.getElementById('render-target'));
});
