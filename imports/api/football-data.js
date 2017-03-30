import { HTTP } from 'meteor/http';
import config from '../startup/football-data-config.js';

// +1: Method documentation and API entrypoints

/***************************************************************
 API METADATA
***************************************************************/

// Note: This should be defined inside a collection
var competitions = ['WC', 'EC', 'CL', 'EL', 'PPL', 'DED', 'FL1', 'CDR', 'PD', 'SA', 'FAC', 'PL', 'DFB', 'BL1'];
var competitionsNames = ['World Cup', 'European Cup of Nations', 'Champions League', 'Europa League', 'UEFA Cup', 'Primeira Liga', 'Eredivise', 'Ligue 1', 'Copa del Rey', 'Primera División (Liga BBVA)', 'Serie A', 'FA Cup', 'English Premiere League', 'DFB Pokal', 'Bundesliga 1'];
var getCompetitionName = function(id) {
  return competitionsNames[competitions.indexOf(id)];
}
module.exports.competitions = competitions;
module.exports.competitionsNames = competitionsNames;
module.exports.getCompetitionName = getCompetitionName;

/***************************************************************
 METHODS
***************************************************************/

// Get all the matches happening in the upcoming week, all competitions
module.exports.getMatchesNextWeek = function(callback) {
  let url = config.hostname + '/fixtures?timeFrame=n7';
  if(callback){
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
};

// Get all matches happening in the upcoming week from a certain competition(s)
module.exports.getMatchesByCompetition = function(id, callback) {
  let url = config.hostname + '/fixtures?timeFrame=n7&league=' + id;
  if(callback){
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
};

// Get all the matches that took place the previous day
module.exports.getMatchesDayBefore = function(callback) {
  let url = config.hostname + '/fixtures?timeFrame=p1&league=' + competitions.join(',');
  if(callback){
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data.fixtures;
  }
};

// Get a certain competition
module.exports.getCompetition = function(id) {
  let url = config.hostname + '/competitions/' + id;
  if(callback){
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data;
  }
};

// Get a certain team
module.exports.getTeam = function(id, callback) {
  let url = config.hostname + '/teams/' + id;
  if(callback){
    HTTP.call('GET', url, config.options, callback);
  } else {
    return HTTP.call('GET', url, config.options).data;
  }
};
