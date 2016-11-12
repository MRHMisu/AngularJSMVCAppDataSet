/*
angular.module('githubContributors').controller('ContribListCtrl', ContribListCtrl);
ContribListCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];
function ContribListCtrl($scope, $routeParams, githubResource) {
    'use strict';
    var vm = this;
    vm.contributors = githubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo,
        'spec': 'contributors'
    });
}
*/


(function () {
    'use strict';
    function constructor($routeParams, githubResource) {
        var vm = this;
        vm.contributors = githubResource.get({
            'query': 'repos',
            'user': $routeParams.user,
            'repo': $routeParams.repo,
            'spec': 'contributors'
        });
    }

    constructor.$inject = ['$routeParams', 'githubResource'];
    angular.module('githubContributors').controller('contribListController', constructor);
})();