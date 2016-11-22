(function() {
    angular.module('shoppingList', ['ngRoute']);
    angular.module('shoppingList').config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/productList.view.html',
            controller: 'productListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/product/:index', {
            templateUrl: "views/product.view.html",
            controller: 'productDetailsController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });
})();