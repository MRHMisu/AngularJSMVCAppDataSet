angular.module('githubContributors', ['githubContributors.services', 'ngRoute']);

angular.module('githubContributors').config(function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
        templateUrl: 'views/search.view.html',
        controller: 'searchController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/github/:user/', {
        templateUrl: 'views/user-page.view.html'

    });
    $routeProvider.when('/github/:user/:repo/', {
        templateUrl: 'views/repo-page.view.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
