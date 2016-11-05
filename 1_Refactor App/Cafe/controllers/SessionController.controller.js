/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * SessionController
 *
 * Configure session and authentication information for entire app.
 */
function SessionController (sessionService, $location, $route) {
    var scope = this;
    scope.user = sessionService.session();

    scope.logoutUser = function (event) {
        sessionService.logout();
        $location.path("/login");
    };

    // Configure session model (for authentication)

    // NOTE: this is redundant here... as already performed in services.js
    // $route.parent( scope );
}
SessionController.$inject = ['sessionService', '$location', '$route'];

angular.module('CafeTownsend').controller('SessionController',SessionController);
