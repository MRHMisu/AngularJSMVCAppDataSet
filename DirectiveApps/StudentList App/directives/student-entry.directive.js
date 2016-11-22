(function () {
    'use strict';
    function constructor() {
        var directive = {
            templateUrl: "views/studentEntry.view.html",
            restrict: 'EA',
            replace: 'true',
            scope:{},
            bindToController:true,
            controller: 'studentEntryController',
            controllerAs: 'vm',
        };
        return directive;
    }

    constructor.$inject = [];
    angular.module('studentManage').directive('studentEntry', constructor);
})();