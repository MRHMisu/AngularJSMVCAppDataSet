angular.module('facebookApp').controller('createUserController', ['$scope', 'userCrudService', '$state', function ($scope, userCrudService, $state) {

    $scope.Cancel = function ()
    {

        $state.go("login")

    }

    $scope.Register = function () {

        if ($scope.Password == $scope.ConfirmPassword) {
            var user = {
                UserName: $scope.UserName,
                Email: $scope.Email,
                Password: $scope.Password
            };

            debugger;
            userCrudService.addUser(user).then(function (success) {
                $state.go('login');
            }, function (error) {
                
                alert("This email already exists ");
                $state.go('register');
            });
        } else {
            $state.go('register-user');
            alert('Password and Confirm Password are not matched');

        }


    }
}]);