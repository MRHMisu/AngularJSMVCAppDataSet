angular.module('facebookApp').controller('babyDanceStepAppController', ['$scope', 'appService', '$state', function ($scope, appService, $state) {
    $scope.genders = ["Male", "Female"];
    $scope.loadingImg = false;
    $scope.appForm = true;
    var danceSetp = [
        "/images/baby-dance-step/1.gif",
        "/images/baby-dance-step/2.gif",
        "/images/baby-dance-step/3.gif",
        "/images/baby-dance-step/4.gif"
    ];
    debugger;

    $scope.Cancel = function ()
    {
        $state.go("apps-selection-page");

    }
    $scope.GetResult = function () {

        $scope.appForm = false;
        $scope.loadingImg = true;
        setTimeout(createAppsInfo, 5000);
    }

    function createAppsInfo() {

        var index = Math.floor((Math.random() * 4) + 0);

        var appData =
            {
                UserName: $scope.UserName,
                ImagePath: danceSetp[index],
                AppsInformation: "Your Childhood Dance Step"
            };

        appService.addAppInformation(appData).then(function (success) {
            debugger;
            var app = success;
            var id = app.AppId;

            $state.go("app-result", { resultId: id })

        }, function (error) {

        });
    }

}]);
