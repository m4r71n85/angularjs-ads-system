'use strict';

app.controller('registerController',
['authenticationService', '$scope',
    function (authenticationService, $scope) {
        $scope.register = function () {
            authenticationService.register($scope.user);
        }
    }
]);