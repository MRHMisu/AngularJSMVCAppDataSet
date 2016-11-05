/**
 * Created by Misu Be Imp on 7/12/2016.
 */


angular.module('myApp').controller('navigationCtrl',navigationCtrl);
navigationCtrl.$inject=['$scope', '$location'];

function navigationCtrl($scope, $location) {

    //required to high light the active navigational point
    $scope.location = $location;

}