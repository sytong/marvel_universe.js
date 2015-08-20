var marvelApiServices = angular.module('marvelApp.apiServices', ['ngResource']);

marvelApiServices.factory('MarvelApi', ['$resource', 'MyCredentials',
  function($resource, credentials){
    var url = 'http://gateway.marvel.com/v1/public/characters';
    var paramDefaults = angular.copy(credentials.generate());
    return $resource(url, paramDefaults, {
      query: {method: 'GET', isArray: false}
    });
  }]);