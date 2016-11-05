/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('puzzleApp', []);

// puzzle types
var types = [
    {id: 'sliding-puzzle', title: 'Sliding puzzle'},
    {id: 'word-search-puzzle', title: 'Word search puzzle'}
];

/**
 * Config
 */
angular.module('puzzleApp').config(function ($routeProvider) {
    $routeProvider.when('/:type');
});

/**
 * Startup
 */
angular.module('puzzleApp').run(function ($rootScope, $route, $filter) {
    $rootScope.types = types;
    $rootScope.type = types[0].id;

    // set type on route change
    $rootScope.$on('$routeChangeSuccess', function (event, route) {
        $rootScope.type = ($filter('filter')(types, {id: route.params.type}).length ? route.params.type : types[0].id);
    });
});
