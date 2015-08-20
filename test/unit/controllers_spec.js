'use strict';

/* jasmine specs for controllers */
describe('MarvelController', function() {
  var scope, ctrl, $httpBackend, mock_credentials;
  
  beforeEach(module('marvelApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _MyCredentials_) {
    scope = $rootScope.$new();
    scope.marvel = {};

    mock_credentials = _MyCredentials_;

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET("http://localhost:1234/test/?a=b&nameStartsWith=Hulk").
      respond(
        {'data': 
          {'results': [{'id': 1, 'name': 'Hulk', 'description': 'Bruce Banner'}]}
        }
      );

    ctrl = $controller('MarvelController', {
      $scope: scope,
      'MyCredentials': _MyCredentials_
    });
  }));

  it('should get me the Hulk', function() {
    spyOn(mock_credentials, "generate").and.returnValue("a=b");
    scope.marvel.searchTerm = 'Hulk';
    scope.marvel.base_url = "http://localhost:1234/test/";
    scope.marvel.search();
    $httpBackend.flush();
    expect(scope.marvel.searchResults[0]).toBe('Hulk: Bruce Banner');
  });
});