/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('kodigon').factory('escape', ['$window', function($window) {
    return {

        name: 'Escape',
        readonly: false,

        encode: function(input) {
            return $window.encodeURI(input);
        },

        decode: function(input) {
            return $window.decodeURI(input);
        }

    };
}]);
