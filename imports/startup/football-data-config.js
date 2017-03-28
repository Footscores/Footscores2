//El token de X-Auth no debería ser público. Podrían añadirlo a un archivo settings que se incluya en el gitignore
module.exports = {
    hostname: 'https://api.football-data.org/v1/',
    options: {
      'headers': {
        'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
        'X-Response-Control': 'minified'
      }
    }
}
