(function () {
    'use strict';
    function constructor(productService) {
        var vm = this;

        function init() {
            vm.validator = {
                'required':true,
                'minlength':"1",
                'maxlength':10
            }

            vm.products = productService.getProductList();
        }

        function addProduct(name, price) {
            vm.products.push({'name': name, 'price': price});
        }
        vm.addProducttt = addProduct;

        init();
    }

    constructor.$inject = ['productService'];
    angular.module('shoppingList').controller('productEntryController', constructor);
})();