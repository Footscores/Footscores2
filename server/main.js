import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Guesses } from '../imports/api/collections/guesses.js';
import { Users } from '../imports/api/collections/users.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser(function(options, user) {
  user.profile = {
    name: '',
    picture: 'http://i.imgur.com/a8K6rWA.png',
    score: 0,
    longestStreak: 0,
    currentStreak: 0,
    favoriteCompetition: '',
    favoriteTeam: []
  };
  return user;
});
