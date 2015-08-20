var marvelControllers = angular.module('marvelApp.controllers', []);

marvelControllers.controller('MarvelController', ['$scope', 'MarvelApi', function($scope, MarvelApi) {
  $scope.marvel.search = function() {
    MarvelApi.query({nameStartsWith: $scope.marvel.searchTerm}).
      $promise.then(function(response){
        $scope.marvel.searchResults = response.data.results.map(function(d) { 
          return d.name + ": " + d.description 
        });
      });
  };
}]);