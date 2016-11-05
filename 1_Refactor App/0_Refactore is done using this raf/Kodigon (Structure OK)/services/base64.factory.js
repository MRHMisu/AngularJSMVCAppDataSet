/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('kodigon').factory('base64', ['$window', function($window) {
    return {

        name: 'Base64',
        readonly: false,

        encode: function(input) {
            return $window.btoa(input);
        },

        decode: function(input) {
            return $window.atob(input);
        }

    };
}]);