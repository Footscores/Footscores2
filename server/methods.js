import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import football from '../imports/api/football-data.js';

Meteor.methods({
  'api.nextWeek'({}){
    return football.getMatchesNextWeek();
  },
  'api.nextWeekCompetition'({id}){
    return football.getMatchesByCompetition(id);
  },
  'api.dayBefore'({}){
    return football.getMatchesDayBefore();
  }
});
