/**
 * Created by Misu Be Imp on 7/13/2016.
 */
'use strict';
/* Directives */
/*angular.module('myApp').directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);
*/

(function() {
    'use strict';
    function constructor(dependency1) {
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    constructor.$inject = ['dependency1'];
    angular.module('Module').directive('Directive', constructor);

    /* @ngInject */
    function ControllerController () {

    }
})();