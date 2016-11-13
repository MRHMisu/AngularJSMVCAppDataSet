/*
 angular.module('githubContributors').controller('SearchCtrl',SearchCtrl);
 SearchCtrl.$inject = ['$scope', '$location'];
 function SearchCtrl($scope, $location) {
 'use strict';

 $scope.user = 'angular';

 $scope.userSearch = function () {
 $location.path(['', 'github', $scope.user, ''].join('/'));
 };
 }
 */

(function () {
    'use strict';
    function constructor($location) {
        var vm = this;
        vm.user = 'angular';

        vm.userSearch = function () {
            $location.path('github/user-view/' + vm.user);
        };
    }

    constructor.$inject = ['$location'];
    angular.module('githubContributors').controller('searchController', constructor);
})();