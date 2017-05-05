/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, func-names
*/
import { HTTP } from 'meteor/http';
import config from '../startup/football-data-config.js';

/**
 API METADATA
**/

const competitions = ['WC', 'EC', 'CL', 'EL', 'PPL', 'DED', 'FL1', 'CDR', 'PD', 'SA', 'FAC', 'PL', 'DFB', 'BL1'];
const competitionsNames = ['World Cup', 'European Cup of Nations', 'Champions League', 'Europa League', 'UEFA Cup', 'Primeira Liga', 'Eredivise', 'Ligue 1', 'Copa del Rey', 'Primera División (Liga BBVA)', 'Serie A', 'FA Cup', 'English Premiere League', 'DFB Pokal', 'Bundesliga 1'];
const getCompetitionName = function (id) {
  return competitionsNames[competitions.indexOf(id)];
};
module.exports.competitions = competitions;
module.exports.competitionsNames = competitionsNames;
module.exports.getCompetitionName = getCompetitionName;

/**
 METHODS
**/

// Get all the matches happening in the upcoming week, all competitions
module.exports.getMatchesNextWeek = function (callback) {
  const url = config.hostname + '/fixtures?timeFrame=n7';
  if (callback) {
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
  return null;
};

// Get all matches happening in the upcoming week from a certain competition(s)
module.exports.getMatchesByCompetition = function (id, callback) {
  const url = config.hostname + '/fixtures?timeFrame=n7&league=' + id;
  if (callback) {
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
  return null;
};

// Get all the matches that took place the previous day
module.exports.getMatchesDayBefore = function (callback) {
  const url = config.hostname + '/fixtures?timeFrame=p62&league=' + competitions.join(',');
  if (callback) {
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
  return null;
};

// Get a certain competition
module.exports.getCompetition = function (id, callback) {
  const url = config.hostname + '/competitions/' + id;
  if (callback) {
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data;
  }
  return null;
};

// Get a certain team
module.exports.getTeam = function (id, callback) {
  const url = config.hostname + '/teams/' + id;
  if (callback) {
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data;
  }
  return null;
};
