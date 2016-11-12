(function() {
    angular.module('puzzleApp', ['ngRoute']);
    angular.module('puzzleApp').config(function ($routeProvider) {
        $routeProvider.when('/sliding-puzzle', {
            templateUrl: 'views/sliding.view.html',
            controller: 'slidingAdvancedController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/word-search', {
            templateUrl: 'views/wordSearch.view.html',
            controller: 'wordSearchController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({ redirectTo: '/sliding-puzzle' });
    });
})();