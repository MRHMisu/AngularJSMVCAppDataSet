facebookApp.service('appService', ['$http', '$q', function ($http, $q)
{
    this.addAppInformation = function (appData) {
        var deferred = $q.defer();
        var req = {
            method: 'POST',
            url: 'http://localhost:10379/api/Apps',

            data:appData,
            dataType: "json"
        }
        $http(req).then(function successCallback(response) {

            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };

    this.getAppResultById = function (appId) {
        var deferred = $q.defer();

        var user = $http({
            method: 'GET',
            url: 'http://localhost:10379/api/Apps',
            params: {
                id: appId
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };


}]);