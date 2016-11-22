facebookApp.service('loginService', ['$http', '$q', function ($http, $q)
{
    this.getValidUser = function (loginData) {
        var deferred = $q.defer();
        var req = {
            method:'POST',
            url: 'http://localhost:10379/api/Logins',

            data:loginData,
            dataType: "json"
        }
        $http(req).then(function successCallback(response) {

            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };



}]);