(function() {
    'use strict';
    function constructor() {
        var directive = {
            templateUrl:"views/studentDetails.view.html",
            restrict: 'EA',
            replace: 'true',
            scope:{},
            bindToController: true,
            controller:'studentDetailsController',
            controllerAs: 'vm',
        };
        return directive;
    }
    constructor.$inject = [];
    angular.module('studentManage').directive('studentDetails', constructor);
})();