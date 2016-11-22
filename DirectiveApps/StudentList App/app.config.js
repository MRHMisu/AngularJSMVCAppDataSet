(function() {
    angular.module('studentManage', ['ngRoute']);
    angular.module('studentManage').config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/studentList.view.html',
            controller: 'studentListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/student/:index', {
            templateUrl: "views/student.view.html",
            controller: 'studentDetailsController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });
})();