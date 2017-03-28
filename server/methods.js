import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import football from '../imports/api/football-data.js';
import Guesses from '../imports/api/collections/guesses.js';

Meteor.methods({
  'api.nextWeek'({}){
    return football.getMatchesNextWeek();
  },
  'api.nextWeekCompetition'({id}){
    return football.getMatchesByCompetition(id);
  },
  'api.dayBefore'({}){
    return football.getMatchesDayBefore();
  },

  'guesses.insert'({date, homeTeam, awayTeam, homeTeamScore, awayTeamScore}){
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Guesses.insert({
      user: Meteor.userId(),
      date,
      homeTeam,
      awayTeam,
      homeTeamScore,
      awayTeamScore
    });
  },
  'guesses.update'({id, correct}) {
    Guesses.update(id, {$set : {correct: correct} });
  }
});
