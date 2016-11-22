(function () {
    'use strict';
    function constructor(studentService, $location) {
        var vm = this;

        function init() {
            vm.students = studentService.getProductList();
            vm.myname = 'Student controller info';
        }

        function removeStudent(index) {
            if (index > -1)vm.students.splice(index, 1);
        }

        function getDetails(index) {
            $location.path('/product/' + index);
        }

        vm.removeStudent = removeStudent;
        vm.getDetails = getDetails;

        init();
    }

    constructor.$inject = ['studentService', '$location'];
    angular.module('studentManage').controller('studentListController', constructor);
})();