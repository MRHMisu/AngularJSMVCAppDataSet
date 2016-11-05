/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('kodigon', [], function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/index.view.html',
        controller: 'indexController'
    });

    $routeProvider.when('/about', {
        templateUrl: 'views/about.view.html',
        controller: 'aboutController'
    });

    $routeProvider.when('/algorithm/:name', {
        templateUrl: 'views/algorithm.view.html',
        controller: 'algoController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});