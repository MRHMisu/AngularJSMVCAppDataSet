angular.module('facebookApp').controller('loginController', ['$scope', '$state', 'loginService', function ($scope, $state, loginService) {

    $scope.login = function () {
        debugger;
        var login = {
            Email: $scope.Email,
            Password: $scope.Password
        };
        loginService.getValidUser(login).then(function (success) {
            debugger;
            if (success == true) {
                localStorage.setItem("UserEmail", $scope.Email);
                $state.go('home');

            } else {
                $state.go('login');
                alert("Invalid email or password");
            }

        }, function (error) {

        });
    }



    $scope.Register = function () {
        $state.go('register-user');

    }
}]);