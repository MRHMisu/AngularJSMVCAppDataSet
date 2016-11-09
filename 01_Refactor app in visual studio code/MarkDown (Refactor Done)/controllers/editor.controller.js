(function (angular) {
    'use strict';

    function constructor() {

        var vm = this;
        var converter = new Showdown.converter();

        var windowHeight = $(window).height();

        vm.markDownDocument = "";

        vm.showSource = false;


        function toggleSource() {
            if (vm.showSource == false) {
                vm.showSource = true;
            } else {
                vm.showSource = false;
            }
        }

        function convertMarkDown(source) {
            return converter.makeHtml(source);
        }

        function resize() {
            $('.scale').css("height", windowHeight - 61);
        }

        vm.resize = resize;
        vm.toggleSource = toggleSource;
        vm.convertMarkDown = convertMarkDown;
        vm.resize();

        $('#editMarkDown').focus();

    }

    constructor.$inject = [];
    angular.module('markDownEditor').controller('editorController', constructor);

})(window.angular);



