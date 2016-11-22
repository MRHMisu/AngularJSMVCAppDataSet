angular.module('memoryGameApp').directive('mgCard', function () {
    return {
        restrict: 'E',
        template: '<div class="container">' +
        '<div class="card" ng-class="{flipped: tile.flipped}">' +
        '<images class="front" ng-src="images/back.png">' +
        '<images class="back" ng-src="images/{{tile.title}}.png">' +
        '</div>' +
        '</div>',
        scope: {
            tile: '='
        }
    }
});