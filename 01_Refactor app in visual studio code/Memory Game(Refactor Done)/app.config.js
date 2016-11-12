'use strict';
(function() {
    angular.module('memoryGameApp', ['ngRoute']);
    angular.module('memoryGameApp').config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/game.view.html',
            controller: 'gameController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });
})();