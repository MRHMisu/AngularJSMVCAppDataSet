'use strict';
angular.module('myApp', ['ngRoute']);
angular.module('myApp').config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/projector.view.html',
        controller: 'projectorController',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});
