angular.module('githubContributors', ['githubContributors.services', 'ngRoute']);
angular.module('githubContributors').config(function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
        templateUrl: 'views/search.view.html',
        controller: 'searchController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/github/user-view/:user/', {
        templateUrl: 'views/user.view.html',
        controller: 'userController',
        controllerAs: 'vm'

    });
    $routeProvider.when('/github/user-repo-view/:user/', {
        templateUrl: 'views/repo-list.view.html',
        controller: 'repositoryListController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/github/repo/:user/:repo/', {
        templateUrl: 'views/repo.view.html',
        controller: 'repositoryController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/github/repolist/:user/:repo/', {
        templateUrl: 'views/contributors-list.view.html',
        controller: 'contribListController',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
