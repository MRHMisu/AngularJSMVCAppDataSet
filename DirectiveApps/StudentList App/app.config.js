angular.module("studentManagement", ['ngRoute']);
angular.module('studentManagement').config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/studentList.view.html',
        controller: 'studentListController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/product/:index', {
        templateUrl: 'views/studentTemplate.view.html',
    });
    $routeProvider.otherwise({redirectTo: '/'});
});
