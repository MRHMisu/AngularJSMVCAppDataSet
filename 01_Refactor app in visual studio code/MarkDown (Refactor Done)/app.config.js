'use strict';

angular.module('markDownEditor', ['markDownEditor.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/editor', {
      templateUrl: 'views/editor.view.html',
      controller: 'editorController',
      controllerAs:'vm'
    });
    $routeProvider.otherwise({redirectTo:'/editor'});
  }]);