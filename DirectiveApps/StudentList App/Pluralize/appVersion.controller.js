(function () {
    'use strict';
    function constructor() {
        var vm = this;
        vm.author="Misu Be Imp";
        vm.description="An like count application";
    }
    constructor.$inject = [];
    angular.module('likedApp').controller('appVersionController', constructor);
})();








