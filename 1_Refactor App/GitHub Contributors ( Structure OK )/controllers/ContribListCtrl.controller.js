/**
 * Created by Misu Be Imp on 7/13/2016.
 */
angular.module('githubContributors').controller('ContribListCtrl',ContribListCtrl);
ContribListCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
function ContribListCtrl($scope, $routeParams, githubResource) {
    'use strict';

    $scope.contributors = githubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo,
        'spec': 'contributors'
    });
}
