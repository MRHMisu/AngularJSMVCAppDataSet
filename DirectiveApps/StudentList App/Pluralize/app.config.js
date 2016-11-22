angular.module("likedApp", ['ngRoute']);
angular.module('likedApp').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'like.view.html',
        controller: 'likeController',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});



