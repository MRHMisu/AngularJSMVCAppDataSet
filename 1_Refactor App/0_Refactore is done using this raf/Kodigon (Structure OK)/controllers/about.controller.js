/**
 * Created by Misu Be Imp on 7/11/2016.
 */

function aboutController($scope, algorithms) {
    $scope.algorithms = algorithms.list;
};

aboutController.$inject = ['$scope', 'algorithms'];
angular.module('kodigon').controller('aboutController',aboutController);