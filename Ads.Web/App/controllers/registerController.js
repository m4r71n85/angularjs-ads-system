'use strict';

app.controller('registerController',
['authenticationService', '$state', '$scope',
    function (authenticationService, $state, $scope) {
        

        $scope.register = function () {
            authenticationService.register($scope.user).then(
                function () {
                    $state.go('home');
                });
        }
    }
]);