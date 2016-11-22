angular.module('facebookApp').controller('detailsUserController', ['$scope', '$state', 'userCrudService', function ($scope, $state, userCrudService) {

    var Email = localStorage.getItem("UserEmail");
    userCrudService.getUser(Email).then(function (success) {
        debugger;
        $scope.user = success;
    }, function (error) {

    });

    $scope.Edit = function () {

        $state.go('update-user-profile');

    }
}]);