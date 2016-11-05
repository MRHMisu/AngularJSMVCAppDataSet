/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('kodigon').factory('urlencode', ['$window', function($window) {
    return {

        name: 'URL Encode',
        readonly: false,

        encode: function(input) {
            return $window.encodeURIComponent(input);
        },

        decode: function(input) {
            return $window.decodeURIComponent(input);
        }

    };
}]);
