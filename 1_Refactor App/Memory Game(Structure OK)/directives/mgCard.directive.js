/**
 * Created by Misu Be Imp on 7/11/2016.
 */
//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>

memoryGameApp.directive('mgCard', function () {
    return {
        restrict: 'E',
        // instead of inlining the template string here, one could use templateUrl: 'mg-card.html'
        // and then either create a mg-card.html file with the content or add
        // <script type="text/ng-template" id="mg-card.html">.. template here.. </script> element to
        // index.html
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