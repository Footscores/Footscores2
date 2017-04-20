import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import football from '../imports/api/football-data.js';
import  Guesses  from '../imports/api/collections/guesses.js';

// You should protect these methods using ValidatedMethod
// import {ValidatedMethod} from 'meteor/mdg:validated-method';

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
  'guesses.check'({}) {
    console.log('Checking the guesses of user ' + this.userId);
    var user = this.userId;
    var results = football.getMatchesDayBefore();
    var pending = Guesses.find({user: user, correct: { $exists: false }}).fetch();
    var total = pending.length;
    var correct = 0;
    for(var i=0; i<total; i++) {
      var guess = pending[i];
      for (var j = 0; j<results.length; j++) {
        if(pending[i].homeTeam === results[j].homeTeamName && pending[i].awayTeam === results[j].awayTeamName) {
          var isCorrect = ((pending[i].homeTeamScore === results[j].result.goalsHomeTeam) && (pending[i].awayTeamScore === results[j].result.goalsAwayTeam));
          Guesses.update(pending[i]._id, {$set: {correct: isCorrect}});
          if(isCorrect) {
            Meteor.users.update(user, { $inc:{"profile.score": 10, "profile.currentStreak": 1, "profile.longestStreak": 1} });
            correct++;
          } else {
              Meteor.users.update(user, { $set: {"profile.currentStreak": 0, "profile.longestStreak": 0} });
          }
        }
      }
    }
    console.log('Found ' + correct + ' corect guesses out of ' + total + ' available to check.');
  }
});
