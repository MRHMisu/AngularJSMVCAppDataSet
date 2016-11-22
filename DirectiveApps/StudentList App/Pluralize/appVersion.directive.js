(function() {
    'use strict';
    function constructor() {
        var directive = {
            templateUrl:'appVersion.view.html',
            restrict: 'EA',
            replace: 'true',
            scope:{},
            bindToController: true,
            controller:'appVersionController',
            controllerAs: 'vm',
        };
        return directive;
    }
    constructor.$inject = [];
    angular.module('likedApp').directive('appVersion', constructor);
})();

