/**
 * Created by Misu Be Imp on 7/11/2016.
 */

/**
 * Advanced sliding puzzle controller
 */
angular.module('puzzleApp').controller('slidingAdvancedCtrl', function($scope) {
    $scope.puzzles = [
        { src: 'images/misko.jpg', title: 'Miško Hevery', rows: 4, cols: 4 },
        { src: 'images/igor.jpg', title: 'Igor Minár', rows: 3, cols: 3 },
        { src: 'images/vojta.jpg', title: 'Vojta Jína', rows: 4, cols: 3 }
    ];
});
