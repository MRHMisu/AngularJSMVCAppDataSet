/**
 * Created by Misu Be Imp on 7/13/2016.
 */
'use strict';
/* Directives */
angular.module('myApp').directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);
