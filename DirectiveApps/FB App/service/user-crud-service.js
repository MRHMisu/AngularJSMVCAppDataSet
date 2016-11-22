facebookApp.service('userCrudService', ['$http', '$q', function ($http, $q) {

    this.getAll = function () {
        var deferred = $q.defer();

        var users = $http({
            method: 'GET',
            url: 'http://localhost:10379/api/Users'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });
        
        return deferred.promise;
    };

    this.addUser = function (userData) {
        var deferred = $q.defer();
        var req = {
            method: 'POST',
            url: 'http://localhost:10379/api/Users',
            
            data: userData,
            dataType: "json"
        }
        $http(req).then(function successCallback(response) {

            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };

    this.getUser = function (UserID) {
        var deferred = $q.defer();

        var user = $http({
            method: 'GET',
            url: 'http://localhost:10379/api/Users',
            params: {
                id:UserID
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };

    
    this.updateUser = function (userData) {
        var deferred = $q.defer();
        debugger;
        var req = {
            method:'PUT',
            url: 'http://localhost:10379/api/Users',
            
            params: {
                id:userData.Email
            },
            data:userData,
            dataType: "json"
        }
        $http(req).then(function successCallback(response) {

            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };


    this.deleteUser = function (UserID) {
        var deferred = $q.defer();
        var req = {
            method: 'DELETE',
            url: 'http://localhost:10379/api/Users',
            params: {

                id: UserID
            }
        }
        $http(req).then(function successCallback(response) {

            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject();
        });

        return deferred.promise;
    };


}]);