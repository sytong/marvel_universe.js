'use strict';

/* jasmine specs for controllers */
describe('MarvelController', function() {
  var scope, ctrl, $httpBackend;
  
  beforeEach(module('marvelApp'));
  beforeEach(module('marvelApp.apiServices'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _MyCredentials_) {
    scope = $rootScope.$new();
    scope.marvel = {};

    spyOn(_MyCredentials_, "generate").and.returnValue({a: 'b'});

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET("http://gateway.marvel.com/v1/public/characters?a=b&nameStartsWith=Hulk").
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
    scope.marvel.searchTerm = 'Hulk';
    scope.marvel.search();
    $httpBackend.flush();
    expect(scope.marvel.searchResults[0]).toBe('Hulk: Bruce Banner');
  });
});