//Para seguridad es importante que el token no esté público (ojo con la historia de github)
module.exports = {
    hostname: 'https://api.football-data.org/v1/',
    options: {
      'headers': {
        'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
        'X-Response-Control': 'minified'
      }
    }
}
