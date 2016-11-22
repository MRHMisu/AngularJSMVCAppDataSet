(function () {
    'use strict';
    function constructor() {
        var vm = this;
        vm.AppsTitle="Like Count Application";
        vm.count = "0";
        vm.people = [{name: "Misu"}, {name: "Dory"}];
    }
    constructor.$inject = [];
    angular.module('likedApp').controller('likeController', constructor);
})();






