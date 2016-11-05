/**
 * Created by Misu Be Imp on 7/11/2016.
 */
angular.module('kodigon').factory('htmlentities', ['$window', function($window) {
    return {

        name: 'HTML Entities',
        readonly: false,

        encode: function(input) {
            return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        },

        decode: function(input) {
            return input.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
        }

    };
}]);
