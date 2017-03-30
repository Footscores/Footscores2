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
  },
  'guesses.check'({user, results}) {
    var pending = Guesses.find({user}).fetch().filter((guess) => {return guess.correct == null || guess.correct == undefined});
    for(var i=0; i<pending.length; i++) {
      var guess = pending[i];
      for (var j = 0; j<results.length; j++) {
        if(pending[i].homeTeam === results[j].homeTeamName && pending[i].awayTeam === results[j].awayTeamName ) {
          var isCorrect = ((pending[i].homeTeamScore === results[i].result.goalsHomeTeam) && (pending[i].awayTeamScore === results[j].result.goalsAwayTeam));
          Guesses.update(pending[i]._id, {$set: {correct: isCorrect}});
          if(isCorrect)
            Meteor.users.udpate(user, { $inc:{score: 10, currentStreak: 1} });
        }
      }
    }
  }
});
