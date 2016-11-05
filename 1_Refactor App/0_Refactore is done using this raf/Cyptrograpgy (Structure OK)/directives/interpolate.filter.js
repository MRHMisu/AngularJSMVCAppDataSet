/**
 * Created by Misu Be Imp on 7/13/2016.
 */
'use strict';

/* Filters */

angular.module('myApp').filter('interpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
