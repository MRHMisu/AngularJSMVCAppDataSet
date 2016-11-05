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
function RepoCtrl($scope, $routeParams, githubResource) {
    'use strict';

    $scope.repoInfo = githubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo
    });

    $scope.watchForms = watchForms;
    $scope.forkForms = forkForms;
}

angular.module('githubContributors').controller('RepoCtrl',RepoCtrl);
RepoCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
