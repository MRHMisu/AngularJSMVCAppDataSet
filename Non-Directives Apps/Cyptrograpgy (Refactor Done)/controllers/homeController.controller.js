(function() {
    'use strict';

    function constructor(WordService) {
        var vm = this;
        Slocialite.load('social-buttons');
    }

    constructor.$inject = ['WordService'];
    angular.module('myApp').controller('homeController', constructor);

})();