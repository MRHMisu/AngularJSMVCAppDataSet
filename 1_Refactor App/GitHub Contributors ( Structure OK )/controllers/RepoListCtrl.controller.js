/**
 * Created by Misu Be Imp on 7/13/2016.
 */


var watchForms = {
        '1': 'Watcher',
        'other': 'Watchers'
    },
    forkForms = {
        '1': 'Fork',
        'other': 'Forks'
    };
RepoListCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
angular.module('githubContributors').controller('RepoListCtrl',RepoListCtrl);
function RepoListCtrl($scope, $routeParams, githubResource) {
    'use strict';

    $scope.repos = githubResource.get({user: $routeParams.user});
    $scope.user = $routeParams.user;

    $scope.watchForms = watchForms;
    $scope.forkForms = forkForms;
}

