(function() {
'use strict';
    function constructor() {
        var studentList;
        function init()
        {
            studentList=[
                {
                    'name':"Misu",
                    'roll':3
                },
                {
                    'name':"Imp",
                    'roll':2
                }
            ];
        }
        function getStudentList(){return studentList;}
        function getStudent(index){return studentList[index];}
        init();
        this.getStudentList=getStudentList;
        this.getStudent=getStudent;
    }
    constructor.$inject = [];
    angular.module('studentManage').service('studentService', constructor);
})();