import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Guesses = new Mongo.Collection('guesses');

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
