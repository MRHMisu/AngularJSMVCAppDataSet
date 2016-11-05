(function() {
'use strict';

    

    function constructor(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }

    
    constructor.$inject = ['dependency1'];
    angular.module('shoppingListApp').controller('shoppingListAppController', constructor);
})();