angular.module('facebookApp').controller('moviePosterAppController', ['$scope', 'appService', '$state', function ($scope, appService, $state) {
    $scope.genders = ["Male", "Female"];
    $scope.loadingImg = false;
    $scope.appForm =true;
    var psoters = [
        "/images/posters/1.jpg",
        "/images/posters/2.jpg",
        "/images/posters/3.jpg",
        "/images/posters/4.jpg",
        "/images/posters/5.jpg",
        "/images/posters/6.jpg",
        "/images/posters/7.jpg",
        "/images/posters/8.jpg",
        "/images/posters/9.jpg",
        "/images/posters/10.jpg",
        "/images/posters/11.jpg",
        "/images/posters/12.jpg",
        "/images/posters/13.jpg",
        "/images/posters/14.jpg",
        "/images/posters/15.jpg",
        "/images/posters/16.jpg",
        "/images/posters/17.jpg",
        "/images/posters/18.jpg",
        "/images/posters/19.jpg",
        "/images/posters/20.jpg",
        "/images/posters/21.jpg",
        "/images/posters/22.jpg",
        "/images/posters/23.jpg",
        "/images/posters/24.jpg"

    ];
    debugger;
    $scope.Cancel = function () {
        $state.go("apps-selection-page");

    }
    $scope.GetResult = function () {

        $scope.appForm = false;
        $scope.loadingImg = true;
        setTimeout(createAppsInfo, 5000);
    }

    function createAppsInfo() {

        var index = Math.floor((Math.random() * 24) + 0);

        var appData =
            {
                UserName: $scope.UserName,
                ImagePath: psoters[index],
                AppsInformation: " This movie is based on your life story"
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
