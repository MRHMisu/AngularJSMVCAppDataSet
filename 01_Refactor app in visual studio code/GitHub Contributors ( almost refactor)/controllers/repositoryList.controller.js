/**
 * Created by Misu Be Imp on 7/13/2016.
 */


/*var watchForms = {
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
}*/

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
    angular.module('githubContributors').controller('repositoryListController', constructor);
})();