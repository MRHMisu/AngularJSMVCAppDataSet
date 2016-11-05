/**
 * Created by Misu Be Imp on 7/11/2016.
 */
function algoController($scope, $route, $routeParams, $location, base64, md5, sha1, cr32, urlencode, htmlentities, sha256) {

    var algo;

    switch ($routeParams.name) {
        case 'base64':
            algo = base64;
            break;
        case 'md5':
            algo = md5;
            break;
        case 'sha1':
            algo = sha1;
            break;
        case 'cr32':
            algo = cr32;
            break;
        case 'urlencode':
            algo = urlencode;
            break;
        case 'htmlentities':
            algo = htmlentities;
            break;
        case 'sha256':
            algo = sha256;
            break;
        default:
            algo = base64;
            break;
    }

    $scope.readonly = algo.readonly;
    $scope.name = algo.name;

    $scope.change = function (text, encoded) {
        if (encoded && !$scope.readonly)
            $scope.raw = algo.decode($scope.encoded);
        else
            $scope.encoded = algo.encode($scope.raw);
    }
};

algoController.$inject = ['$scope', '$route', '$routeParams', '$location', 'base64', 'md5', 'sha1', 'cr32', 'urlencode', 'htmlentities', 'sha256'];

angular.module('kodigon').controller('algoController', algoController);