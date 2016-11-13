/**
 * Created by Misu Be Imp on 7/13/2016.
 */

/*
angular.module('githubContributors').controller('UserCtrl',UserCtrl);
UserCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
function UserCtrl($scope, $routeParams, githubResource) {
    'use strict';

    $scope.user_info = githubResource.get({user: $routeParams.user, repo: ''});

    $scope.publicRepoForms = {
        '1': 'Public repo',
        'other': 'Public repos'
    };
    $scope.followerForms = {
        '1': 'Follower',
        'other': 'Followers'
    };
}
*/


(function() {
    'use strict';
    function constructor($routeParams,githubResource)
    {
        var vm = this;
        vm.user_info = githubResource.get({user: $routeParams.user, repo: ''});

        vm.publicRepoForms = {
            '1': 'Public repo',
            'other': 'Public repos'
        };
        vm.followerForms = {
            '1': 'Follower',
            'other': 'Followers'
        };
    }
    constructor.$inject = ['$routeParams','githubResource'];
    angular.module('githubContributors').controller('userController', constructor);
})();