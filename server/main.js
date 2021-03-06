/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-unused-vars, no-param-reassign
*/
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Guesses } from '../imports/api/collections/guesses';
import { Users } from '../imports/api/collections/users';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser((options, user) => {
  user.profile = {
    name: '',
    picture: 'https://i.imgur.com/a8K6rWA.png',
    score: 0,
    longestStreak: 0,
    currentStreak: 0,
    favoriteCompetition: '',
    favoriteTeam: [],
  };
  return user;
});
