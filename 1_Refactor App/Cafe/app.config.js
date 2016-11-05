/**
 * Created by Misu Be Imp on 7/12/2016.
 */
angular.module('CafeTownsend',[], function ($routeProvider, $locationProvider) {

    $routeProvider.when('/login', {
        template: "views/login.html",
        controller: "LoginController"
    });

    $routeProvider.when('/employee', {
        template: "views/employees.html",
        controller: "EmployeeController"
    });

    $routeProvider.when('/employee/:id', {
        template: "views/employee_edit.html",
        controller: "EmployeeEditController"
    });

    $routeProvider.otherwise({redirectTo:'/employee'});
});