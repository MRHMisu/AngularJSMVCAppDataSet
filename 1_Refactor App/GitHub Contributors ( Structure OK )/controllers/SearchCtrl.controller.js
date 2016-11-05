/**
 * Created by Misu Be Imp on 7/13/2016.
 */


angular.module('githubContributors').controller('SearchCtrl',SearchCtrl);
SearchCtrl.$inject = ['$scope', '$location'];
function SearchCtrl($scope, $location) {
    'use strict';

    $scope.user = 'angular';

    $scope.userSearch = function () {
        $location.path(['', 'github', $scope.user, ''].join('/'));
    };
}
