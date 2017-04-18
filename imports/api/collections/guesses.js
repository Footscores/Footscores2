import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Guesses = new Mongo.Collection('guesses');

var Schemas = {};

Schemas.Guess = new SimpleSchema({
  user: {
    type: String,
    label: "Owner of this guess",
    optional: false
  },
  date: {
    type: Date,
    label: "Date the match is taking place",
    optional: false
  },
  homeTeam: {
    type: String,
    label: "Home team name",
    max: 100,
    optional: false
  },
  awayTeam: {
    type: String,
    label: "Away team name",
    max: 100,
    optional: false
  },
  homeTeamScore: {
    type: SimpleSchema.Integer,
    label: "Guessed score for the home team",
    min: 0,
    optional: false
  },
  awayTeamScore: {
    type: SimpleSchema.Integer,
    label: "Guessed score for the away team",
    min: 0,
    optional: false
  },
  correct: {
    type: Boolean,
    label: "Indicates whether the guess was correct or not",
    optional: true
  }
});

Guesses.attachSchema(Schemas.Guess);
export default Guesses;

if (Meteor.isServer) {
  Meteor.publish('guesses', function publishGuesses() {
    return Guesses.find();
  });
}

Meteor.methods({
  'guesses.insert'({date, homeTeam, awayTeam, homeTeamScore, awayTeamScore}){
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Guesses.insert({
      user: this.userId,
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
  'guesses.check'({user}) {
    var results = football.getMatchesDayBefore();
    var pending = Guesses.find({user: user, correct: { $exists: false }}).fetch();
    for(var i=0; i<pending.length; i++) {
      var guess = pending[i];
      for (var j = 0; j<results.length; j++) {
        if(pending[i].homeTeam === results[j].homeTeamName && pending[i].awayTeam === results[j].awayTeamName) {
          var isCorrect = ((pending[i].homeTeamScore === results[j].result.goalsHomeTeam) && (pending[i].awayTeamScore === results[j].result.goalsAwayTeam));
          Guesses.update(pending[i]._id, {$set: {correct: isCorrect}});
          if(isCorrect)
            Meteor.users.update(user, { $inc:{"profile.score": 10, "profile.currentStreak": 1, "profile.longestStreak": 1} });
          else
            Meteor.users.update(user, { $set: {"profile.currentStreak": 0, "profile.longestStreak": 0} });
        }
      }
    }
  }
})
