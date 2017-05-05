/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, prefer-arrow-callback
*/
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Guesses = new Mongo.Collection('guesses');

const Schemas = {};

Schemas.Guess = new SimpleSchema({
  user: {
    type: String,
    label: 'Owner of this guess',
    optional: false,
  },
  date: {
    type: Date,
    label: 'Date the match is taking place',
    optional: false,
  },
  homeTeam: {
    type: String,
    label: 'Home team name',
    max: 100,
    optional: false,
  },
  awayTeam: {
    type: String,
    label: 'Away team name',
    max: 100,
    optional: false,
  },
  homeTeamScore: {
    type: SimpleSchema.Integer,
    label: 'Guessed score for the home team',
    min: 0,
    optional: false,
  },
  awayTeamScore: {
    type: SimpleSchema.Integer,
    label: 'Guessed score for the away team',
    min: 0,
    optional: false,
  },
  correct: {
    type: Boolean,
    label: 'Indicates whether the guess was correct or not',
    optional: true,
  },
});

Guesses.attachSchema(Schemas.Guess);
export default Guesses;

if (Meteor.isServer) {
  Meteor.publish('guesses', function publishGuesses() {
    return Guesses.find();
  });
}

Meteor.methods({
  'guesses.insert'({ date, homeTeam, awayTeam, homeTeamScore, awayTeamScore }) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Guesses.insert({
      user: this.userId,
      date,
      homeTeam,
      awayTeam,
      homeTeamScore,
      awayTeamScore,
    });
  },
  'guesses.update'({ id, correct }) {
    Guesses.update(id, { $set: { correct: correct } });
  },
});
