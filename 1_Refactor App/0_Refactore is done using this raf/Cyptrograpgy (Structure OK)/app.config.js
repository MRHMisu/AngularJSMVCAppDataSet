'use strict';

angular.module('myApp', []);

// Declare app level module which depends on filters, and services
angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/aes', {template: 'views/aes.view.html', controller: aesCtrl});
    $routeProvider.when('/about', {template: 'views/about.view.html', controller: homeCtrl});
    //$routeProvider.when('/memorize', {template: 'views/memorize.view.html', controller: memorizeCtrl});
    $routeProvider.when('/phrases', {template: 'views/phrases.view.html', controller: phrasesCtrl});
    //$routeProvider.when('/about', {template: 'views/about.view.html', controller: aboutCtrl});
    $routeProvider.otherwise({redirectTo: '/aes'});
  }]);
