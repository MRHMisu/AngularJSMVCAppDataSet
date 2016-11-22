angular.module('facebookApp').controller('appResultController', ['$scope', 'appService', '$stateParams', function ($scope, appService, $stateParams)
{
    appService.getAppResultById($stateParams.resultId).then(function (success) {
        debugger;
        $scope.appresult = success;
    }, function (error) {

    });

}]);