//El auth-token para el api no debería ser público. Podrían usar un archivo settings.json o manejarlo como variables de entorno.
module.exports = {
    hostname: 'https://api.football-data.org/v1/',
    options: {
      'headers': {
        'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
        'X-Response-Control': 'minified'
      }
    }
}
