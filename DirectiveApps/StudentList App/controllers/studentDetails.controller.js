(function() {
    'use strict';
    function constructor($routeParams,studentService)
    {
        var vm = this;
        var index = $routeParams.index;
        vm.product= studentService.getStudent(index);
    }
    constructor.$inject = ['$routeParams','studentService'];
    angular.module('studentManage').controller('studentDetailsController', constructor);
})();