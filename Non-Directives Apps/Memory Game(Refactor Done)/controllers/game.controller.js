(function () {
    'use strict';
    function constructor(game) {
        var vm = this;
        vm.game=game;
    }

    constructor.$inject = ['game'];
    angular.module('memoryGameApp').controller('gameController', constructor);
})();