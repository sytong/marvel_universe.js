'use strict';

/* mocked credentials module */
angular.module('mock.credentials', []).
  factory('MyCredentials', function(ts) {
    var myCrednentials = {};

    myCredentials.generate = function(timestamp) {
      // dummy default params
      return "a=b";
    };

    return myCredentials;
  });

/* jasmine specs for controllers */
describe('Marvel controllers', function() {
  var scope, ctrl, $httpBackend, mock_credentials
  
  beforeEach(module('mock.credentials'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, _MyCredentials_) {
    scope = $rootScope.$new();
    scope.base_url = "http://localhost:1234/test/"

    mock_credentials = _MyCredentials_;

    var base_path = scope.base_url + "?" + mock_credentials.generate();
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET(base_path + "&nameStartsWith=Hulk").
      respond(
        {'data': 
          {'results': [{'id': 1, 'name': 'Hulk', 'description': 'Bruce Banner'}]}
        }
      );

    ctrl = $controller('MarvelController', {
      $scope: scope,
      MyCredentials: _MyCredentials_
    });
  }));

  it('should get me the Hulk', function() {
    $httpBackend.flush();
    expect(scope.marvel.searchResults).toBe('Hulk: Bruce Banner');
  });


});