angular.module('facebookApp').directive('appTag', function () {
    return {
        restrict: 'E',
        templateUrl: "/partial/app-result-template.html",
        scope: {
            data: '='
        },
        link: function (scope, elm, attr) {
            debugger;
        }
    }
});