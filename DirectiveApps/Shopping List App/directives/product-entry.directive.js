(function () {
    'use strict';
    function constructor() {
        var directive = {
            templateUrl: "views/productEntry.view.html",
            restrict: 'EA',
            replace: 'true',
            scope:{},
            bindToController:true,
            controller: 'productEntryController',
            controllerAs: 'vm',
        };
        return directive;
    }

    constructor.$inject = [];
    angular.module('shoppingList').directive('productEntry', constructor);
})();