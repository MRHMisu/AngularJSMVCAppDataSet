angular.module('facebookApp').controller('usersController', ['$scope', 'userCrudService', function ($scope, userCrudService) {

    userCrudService.getAll().then(function (success) {
        $scope.users = success;
    }, function (error) {

    });

}]);