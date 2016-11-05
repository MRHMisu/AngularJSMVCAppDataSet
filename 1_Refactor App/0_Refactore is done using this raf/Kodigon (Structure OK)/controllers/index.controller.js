/**
 * Created by Misu Be Imp on 7/11/2016.
 */
function indexController($scope, algorithms) {
    $scope.algorithms = algorithms.list;
};

indexController.$inject = ['$scope', 'algorithms'];
angular.module('kodigon').controller('indexController', indexController);