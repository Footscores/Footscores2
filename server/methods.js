/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default
*/
import { Meteor } from 'meteor/meteor';
import football from '../imports/api/football-data.js';
import Guesses from '../imports/api/collections/guesses.js';

Meteor.methods({
  'api.nextWeek'({}) {
    return football.getMatchesNextWeek();
  },
  'api.nextWeekCompetition'({ id }) {
    return football.getMatchesByCompetition(id);
  },
  'api.dayBefore'({}) {
    return football.getMatchesDayBefore();
  },
  'guesses.check'({}) {
    console.log('Checking the guesses of user ' + this.userId);
    const user = this.userId;
    const results = football.getMatchesDayBefore();
    const pending = Guesses.find({ user, correct: { $exists: false } }).fetch();
    const total = pending.length;
    let correct = 0;
    for (let i = 0; i < total; i++) {
      for (let j = 0; j < results.length; j++) {
        if (pending[i].homeTeam === results[j].homeTeamName
          && pending[i].awayTeam === results[j].awayTeamName) {
          const isCorrect = ((pending[i].homeTeamScore === results[j].result.goalsHomeTeam)
            && (pending[i].awayTeamScore === results[j].result.goalsAwayTeam));
          Guesses.update(pending[i]._id, { $set: { correct: isCorrect } });
          if (isCorrect) {
            Meteor.users.update(user, { $inc: { 'profile.score': 10, 'profile.currentStreak': 1, 'profile.longestStreak': 1 } });
            correct += 1;
          } else {
            Meteor.users.update(user, { $set: { 'profile.currentStreak': 0, 'profile.longestStreak': 0 } });
          }
        }
      }
    }
    console.log('Found ' + correct + ' corect guesses out of ' + total + ' available to check.');
  },
});
