
// You better not share this publicly and declare these private variables
// inside a settings.json file
module.exports = {
    hostname: 'https://api.football-data.org/v1/',
    options: {
      'headers': {
        'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
        'X-Response-Control': 'minified'
      }
    }
}
