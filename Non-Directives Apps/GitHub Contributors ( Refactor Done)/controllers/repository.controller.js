/*
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

angular.module('githubContributors').controller('RepoCtrl', RepoCtrl);
RepoCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
*/


(function () {
    'use strict';
    function constructor($routeParams,githubResource) {
        var vm = this;
        vm.repoInfo = githubResource.get({
            'query': 'repos',
            'user': $routeParams.user,
            'repo': $routeParams.repo
        });

        vm.watchForms = {
            '1': 'Watcher',
            'other': 'Watchers'
        },
            vm.forkForms = {
                '1': 'Fork',
                'other': 'Forks'
            };
    }

    constructor.$inject = ['$routeParams','githubResource'];
    angular.module('githubContributors').controller('repositoryController', constructor);
})();