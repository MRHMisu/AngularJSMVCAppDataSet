(function () {
    'use strict';
    function constructor(WordService) {
        var vm = this;
        vm.wordCount = 4;
        vm.wordListLength = WordService.wordListLength();
        vm.getRandomWords = function () {

            vm.words = WordService.getWords(vm.wordCount);
            vm.permutations = WordService.calculatePermutations(vm.wordCount);
            vm.lastWordCount = vm.wordCount;
            vm.wordListLength = WordService.wordListLength();

        }
        vm.getRandomWords();
    }

    constructor.$inject = ['WordService'];
    angular.module('myApp').controller('phrasesController', constructor);
})();


