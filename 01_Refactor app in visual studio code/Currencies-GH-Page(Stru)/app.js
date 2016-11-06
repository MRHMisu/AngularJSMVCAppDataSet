//'use strict';
// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']);


'use strict';
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']);
angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/currency', {
        templateUrl: 'views/currency.view.html',
        controller: 'currencyController',
        controllerAs:'vm'
    });
    $routeProvider.otherwise({redirectTo: '/currency'});
}]);