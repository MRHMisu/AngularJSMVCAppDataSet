/**
 * Created by Misu Be Imp on 7/11/2016.
 */


/**
 * Directive
 */
angular.module('puzzleApp').directive('wordSearchPuzzle', function (wordSearchPuzzle) {
    return {
        restrict: 'EA',
        replace: true,
        template: '<table class="word-search-puzzle" cellspacing="0" ng-class="{\'puzzle-solved\': puzzle.solved}">' +
        '<tr ng-repeat="items in puzzle.matrix">' +
        '<td ng-repeat="item in items" unselectable="on"' +
        ' ng-class="{\'puzzle-found\': item.found, \'puzzle-selected\': item.selected, \'puzzle-message\': puzzle.solved && !item.found}"' +
        ' ng-mousedown="selectStart(item)" ng-mouseup="selectEnd()" ng-mouseenter="selectEnter(item)">' +
        ' <span>{{item.letter}}</span>' +
        '</td>' +
        '</tr>' +
        '</table>',
        scope: {
            matrix: '=',
            words: '=',
            api: '='
        },
        link: function (scope, element, attrs) {
            var selectFrom;

            // setup puzzle
            scope.$watch('matrix', function (matrix) {
                scope.puzzle = wordSearchPuzzle(matrix, scope.words);

                // link service
                if (attrs.api) {
                    scope.api = scope.puzzle;
                }
            });

            /**
             * Selected items
             * @type {Array}
             */
            scope.selected = [];

            /**
             * Selection start
             * @param item
             */
            scope.selectStart = function (item) {
                selectFrom = item;
            };

            /**
             * Selection enter (over)
             * @param item
             */
            scope.selectEnter = function (item) {
                if (selectFrom) {
                    scope.selected = scope.puzzle.getItems(selectFrom.col, selectFrom.row, item.col, item.row);
                }
            };

            /**
             * Selection end
             */
            scope.selectEnd = function () {
                selectFrom = null;
                scope.puzzle.lookup(scope.selected);
                scope.selected = [];
            };

            // propagate selection state to matrix
            scope.$watch('selected', function (newItems, oldItems) {
                angular.forEach(oldItems, function (item) {
                    item.selected = false;
                });
                angular.forEach(newItems, function (item) {
                    item.selected = true;
                });
            });
        }
    };
});