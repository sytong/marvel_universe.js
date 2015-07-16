angular.module('marvelApp.controllers', []).
controller('MarvelController', ['$scope', '$http', 'MyCredentials', function($scope, $http, credentials) {
  var ts = new Date().getTime();
  var base_url = "http://gateway.marvel.com/v1/public/characters";
  var auth_tokens = credentials.generate(ts);
  var common_url = base_url + "?ts=" + ts + "&apikey=" + auth_tokens.public_key + "&hash=" + auth_tokens.hash;

  $scope.marvel.search = function() {
    $http.get(common_url + "&nameStartsWith=" + $scope.marvel.searchTerm).
      success(function(response) {
        //console.log(response);
        $scope.marvel.searchResults = response.data.results.map(function(d) { return d.name + ": " + d.description });
      }).
      error(function (data) {
        $scope.marvel.searchResults = ["Request failed"];
      });
  };
}]);