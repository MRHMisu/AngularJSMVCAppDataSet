/**
 * Created by Misu Be Imp on 7/12/2016.
 */


angular.module('myApp').controller('homeCtrl',homeCtrl);
homeCtrl.$inject=['WordService'];

function homeCtrl(WordService) {

    Slocialite.load('social-buttons');

}