(function () {
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.name = "";

    $scope.CheckIfTooMuch = function () {
        var x = $scope.name.split(",");
        var message;
    
        for (var i = 0; i < x.length; i++){

        }

        if (x=="") {
            message = "Please enter data first";
        } else if (i < 3) {
            message = "Enjoy";
        } else  {
            message = "Too much";
        }


    $scope.message = message;
    };
}})();