angular.module('marvelApp.controllers', []).
controller('MarvelController', ['$scope', '$http', 'MyCredentials', function($scope, $http, credentials) {

  $scope.marvel.base_url = "http://gateway.marvel.com/v1/public/characters";
  
  $scope.marvel.search = function() {
    var base_path = $scope.marvel.base_url;
    $http.get(base_path + "?" + credentials.generate() + "&nameStartsWith=" + $scope.marvel.searchTerm).
      success(function(response) {
        //console.log(response);
        $scope.marvel.searchResults = response.data.results.map(function(d) { return d.name + ": " + d.description });
      }).
      error(function (data) {
        $scope.marvel.searchResults = ["Request failed"];
      });
  };
}]);