/**
 * Created by Misu Be Imp on 7/12/2016.
 */

(function () {
    'use strict';

    function constructor(WordService) {
        var vm = this;

        var passPhraseWordCount = 5;

        function init()
        {
            vm.message = '';
            vm.cypher = '';
            vm.cypherString = '';
            vm.passphrase = '';
            vm.feedBack = '';
            vm.status = '';
        }
        function encrypt() {

            if (vm.message != '' && vm.passphrase != '') {
                vm.cypher = CryptoJS.AES.encrypt(vm.message, vm.passphrase);
                vm.cypherString = String(vm.cypher);
                vm.message = '';
                vm.feedBack = 'The text was successfully encrypted.';
                vm.status = 'success';
            } else {
                vm.feedBack = 'You need to enter or generate a key phrase to encrypt text.';
                vm.status = 'error';
            }

        }


        function decrypt() {


            if (vm.cypher == '' | vm.passphrase == '') {
                vm.feedBack = 'You need to enter your key phrase to decrypt this cypher.';
                vm.status = 'error';
            } else {
                vm.message = CryptoJS.AES.decrypt(vm.cypher, vm.passphrase).toString(CryptoJS.enc.Utf8);
                if (vm.message == '') {
                    vm.feedBack = 'Cypher and key phrase do not match';
                    vm.status = 'error';
                } else {
                    vm.cypherString = '';
                    vm.cypher = '';
                    vm.feedBack = 'The cypher was successfully decrypted.';
                    vm.status = 'success';
                }
            }
        }

        function newPassPhrase() {
            vm.passphrase = WordService.getWords(passPhraseWordCount);
        }

        function clear() {
            vm.message = '';
            vm.cypher = '';
            vm.cypherString = '';
            vm.passphrase = '';
            vm.feedBack = '';
            vm.status = '';
        }

        init();
        vm.clear = clear;
        vm.newPassPhrase = newPassPhrase;
        vm.decrypt = decrypt;
        vm.encrypt = encrypt;
    }

    constructor.$inject = ['WordService'];
    angular.module('myApp').controller('aesController', constructor);

})();

