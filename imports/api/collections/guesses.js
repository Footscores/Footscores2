import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Guesses = new Mongo.Collection('guesses');

var Schemas = {};

Schemas.Guess = new SimpleSchema({
  user: {
    type: SimpleSchema.Integer,
    label: "Owner of this guess",
    min: 0,
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

Meteor.methods({
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
export default Guesses;
