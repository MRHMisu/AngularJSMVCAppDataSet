/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * EmployeeController
 *
 * Manages the presentation model for the EmployeeList view
 * Supports CRUD operations, employee selection and routing to editor
 */
function EmployeeController ( session, delegate, $location ) {
    var scope = this;
    scope.employees =  delegate.loadAll();
    scope.selected  =  delegate.selected;



    // 1) Create a new employee and show in editor
    scope.addNew    = function () {
        scope.edit( delegate.create() );
    };

    // 2) Delete selected employee
    scope.remove    = function ( employee ) {
        if ( angular.isUndefined(employee) ) return;

        scope.employees = delegate.terminate( employee );
        scope.selected  = (delegate.selected = null);
    };

    // 3) Select employee as `current`
    scope.select    = function (employee) {
        scope.selected = (delegate.selected = employee);
    };

    // 4) Edit specified employee in editor view
    scope.edit     = function ( employee ) {
        if ( angular.isUndefined(employee) ) return;

        scope.select(employee);
        $location.path( '/employee/'+employee.id );
    };

};
EmployeeController.$inject = [ 'sessionService', 'employeeService', '$location' ];
angular.module('CafeTownsend').controller('EmployeeController',EmployeeController);