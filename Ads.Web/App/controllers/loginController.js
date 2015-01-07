'use strict';

app.controller('loginController',
['authenticationService', '$state', '$scope',
    function (authenticationService, $state, $scope) {


        $scope.login = function () {
            authenticationService.login($scope.user).then(
                function () {
                    $state.go('home');
                });
        }
    }
]);