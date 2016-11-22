angular.module('myApp',['ngRoute']);
angular.module('myApp').config(function ($routeProvider) {
        $routeProvider.when('/aes', {
            templateUrl: 'views/aes.view.html',
            controller: 'aesController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/about', {
            templateUrl: 'views/about.view.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/phrases', {
            templateUrl: 'views/phrases.view.html',
            controller: 'phrasesController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({redirectTo: '/aes'});
    });
