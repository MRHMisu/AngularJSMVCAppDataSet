angular.module('facebookApp').controller('updateUserController', ['$scope', '$state', 'userCrudService', function ($scope, $state, userCrudService) {


    var id;
    var Email = localStorage.getItem("UserEmail");
    userCrudService.getUser(Email).then(function (success) {
        debugger;
        $scope.user = success;
        id = $scope.user.UserId;
    }, function (error) {

    });

    $scope.Cancel = function () {
        $state.go("user-profile");

    }

    $scope.Update = function () {
        debugger;
        if ($scope.user.Password == $scope.ConfirmPassword) {
            var user = {
                UserId: id,
                UserName: $scope.user.UserName,
                Email: $scope.user.Email,
                Password: $scope.user.Password
            };

            userCrudService.updateUser(user).then(function (success) {
                debugger;
                $state.go("user-profile");
            }, function (error) {

            });
        } else {
            alert("Please Confirm Password");
        }

    }
}]);