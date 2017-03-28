import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Users = new Mongo.Collection('users');

var Schemas = {};

Schemas.Users = new SimpleSchema({
  name: {
    type: String,
    label: "User's name and last name",
    max: 100,
    optional: false
  },
  picture: {
    type: String,
    label: "User's profile picture"
  },
  score: {
    type: SimpleSchema.Integer,
    label: "Total score of the user",
    min: 0,
    optional: false
  },
  longestStreak: {
    type: SimpleSchema.Integer,
    label: "User's longest streak of correct guesses",
    min: 0,
    optional: false
  },
  currentStreak: {
    type: SimpleSchema.Integer,
    label: "User's current streak of correct guesses",
    min: 0,
    optional: false
  },
  favoriteCompetition: {
    type: String,
    label: "User's favorite's competition code",
    max: 100,
    optional: true
  },
  favoriteTeam: {
    type: Array,
    label: "User's favorite teams' ids",
    optional: true
  }
});

Users.attachSchema(Schemas.User);
export default Users;
