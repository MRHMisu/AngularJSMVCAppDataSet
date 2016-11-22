(function () {
    'use strict';
    function constructor(studentService) {
        var vm = this;

        function init() {
            vm.validator = {
                'required':true,
                'minlength':"1",
                'maxlength':10
            }

            vm.students = studentService.getProductList();
        }

        function addStudent(name, price) {
            vm.students.push({'name': name, 'roll': roll});
        }
        vm.addStudent = addStudent;

        init();
    }

    constructor.$inject = ['studentService'];
    angular.module('studentManage').controller('studentEntryController', constructor);
})();