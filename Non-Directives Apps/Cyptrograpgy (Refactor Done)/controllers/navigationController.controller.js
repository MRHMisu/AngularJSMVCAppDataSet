(function () {
    'use strict';

    function constructor($location) {
        var vm = this;
        vm.location=$location;
        
    }
    
    constructor.$inject = ['$location'];
    angular.module('myApp').controller('navigationController', constructor);
})();