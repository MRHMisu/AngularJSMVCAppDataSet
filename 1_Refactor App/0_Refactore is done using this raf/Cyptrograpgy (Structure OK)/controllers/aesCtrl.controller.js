/**
 * Created by Misu Be Imp on 7/12/2016.
 */

angular.module('myApp').controller('aesCtrl',aesCtrl);
aesCtrl.$inject=['$scope', 'WordService'];

function aesCtrl($scope, WordService) {

    var passPhraseWordCount = 5;

    $scope.message = '';
    $scope.cypher = '';
    $scope.cypherString = '';
    $scope.passphrase = '';
    $scope.feedBack = '';
    $scope.status = '';


    $scope.encrypt = function () {

        if ($scope.message != '' && $scope.passphrase != '') {

            $scope.cypher = CryptoJS.AES.encrypt($scope.message, $scope.passphrase);

            $scope.cypherString = String($scope.cypher);

            $scope.message = '';

            $scope.feedBack = 'The text was successfully encrypted.';

            $scope.status = 'success';

        } else {

            $scope.feedBack = 'You need to enter or generate a key phrase to encrypt text.';

            $scope.status = 'error';

        }

    }


    $scope.decrypt = function () {


        if ($scope.cypher == '' | $scope.passphrase == '') {

            $scope.feedBack = 'You need to enter your key phrase to decrypt this cypher.';

            $scope.status = 'error';

        } else {

            $scope.message = CryptoJS.AES.decrypt($scope.cypher, $scope.passphrase).toString(CryptoJS.enc.Utf8);

            if ($scope.message == '') {

                $scope.feedBack = 'Cypher and key phrase do not match';

                $scope.status = 'error';

            } else {

                $scope.cypherString = '';

                $scope.cypher = '';

                $scope.feedBack = 'The cypher was successfully decrypted.';

                $scope.status = 'success';

            }

        }

    }


    $scope.newPassPhrase = function () {

        $scope.passphrase = WordService.getWords(passPhraseWordCount);

    }

    $scope.clear = function () {

        $scope.message = '';
        $scope.cypher = '';
        $scope.cypherString = '';
        $scope.passphrase = '';
        $scope.feedBack = '';
        $scope.status = '';

    }

}

