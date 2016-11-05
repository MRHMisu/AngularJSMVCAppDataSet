/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * EmployeeEditController
 *
 * Manages the presentation model for the EmployeeEditor view
 * Supports Save and Cancel edit employee operations
 */
function EmployeeEditController ( delegate, $routeParams, $location ) {
    var vm  =  this;

    if ( angular.isDefined( $routeParams.id ) ) {
        // Adjust to deeplink to insure the correct employee is selected

        delegate.selected = delegate.findByID( $routeParams.id );
    }

    vm.employee  =  angular.Object.copy( delegate.selected, { } );
    vm.isEditing =  vm.employee.isNew || false;

    // 1) Save updated employee information & return to employee list
    vm.save = save;
	function save() {
        if ( vm.employee != null ) {
            angular.Object.copy( vm.employee, delegate.selected );
        }

        // Remove the `isNew` property
        if ( delegate.selected != null ) {
            delete delegate.selected.isNew;

            delegate.save( delegate.selected );
        }

        $location.path('/employee');
    };

    // 2) Cancel edits for current employee
    vm.cancel    =cancel;
	function cancel() {
        if ( vm.isEditing )
        {
            // If cancelling a new record... be sure to 
            // auto-remove it from our list also
            delegate.terminate( vm.employee.id );
            delegate.selected = null;

            vm.employee     = null;
        }

        $location.path('/employee');
    };

    // 3) Delete current employee
    vm.remove    = remove;
	function remove( ) {
        delegate.terminate( vm.employee.id );

        delegate.selected = null;
        vm.employee     = null;

        $location.path('/employee');
    };

}

EmployeeEditController.$inject = [ 'employeeService', '$routeParams', '$location' ];
angular.module('CafeTownsend').controller('EmployeeEditController',EmployeeEditController);