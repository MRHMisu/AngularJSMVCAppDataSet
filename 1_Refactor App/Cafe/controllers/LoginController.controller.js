/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * LoginController
 *
 * Manages the login process for the CafeTownsend application
 * Using the current userName/password, authenticate the user.
 */
function LoginController( sessionService, $location ) {
    var scope = this;

    /**
     * Authenticate user using specified username and password!
     */
    scope.authenticateUser = function() {
        var user = sessionService.session();

        if ((user.userName != "") && (user.password == "angular"))
        {
            user.authenticated = true;
            $location.path('/employee');
        }
    };
}
LoginController.$inject = [ 'sessionService', '$location' ];
angular.module('CafeTownsend').controller('LoginController',LoginController);