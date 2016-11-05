/**
 * Created by Misu Be Imp on 7/12/2016.
 */

angular.module('myApp').controller('phrasesCtrl',phrasesCtrl);
phrasesCtrl.$inject=['$scope', 'WordService'];
function phrasesCtrl($scope,WordService) {

    $scope.wordCount = 4;
    $scope.wordListLength = WordService.wordListLength();

    $scope.getRandomWords = function () {

        $scope.words = WordService.getWords($scope.wordCount);
        $scope.permutations = WordService.calculatePermutations($scope.wordCount);
        $scope.lastWordCount = $scope.wordCount;
        $scope.wordListLength = WordService.wordListLength();

    }

    $scope.getRandomWords();

}
