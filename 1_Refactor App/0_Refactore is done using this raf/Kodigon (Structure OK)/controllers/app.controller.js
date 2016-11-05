/**
 * Created by Misu Be Imp on 7/11/2016.
 */
function appController($scope, $location) {
    $scope.location = $location;
    $scope.algoLocation = new RegExp('^/algorithm');
};

appController.$inject = ['$scope', '$location'];
angular.module('kodigon').controller('appController', appController);