'use strict';

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(angular.module('angularCmsBaseApp'));

  var AdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(angular.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminCtrl = $controller('AdminCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
