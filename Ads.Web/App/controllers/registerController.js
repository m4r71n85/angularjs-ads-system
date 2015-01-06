'use strict';

app.controller('registerController',
['authenticationService', '$state', '$scope',
    function (authenticationService, $state, $scope) {
        

        $scope.register = function () {
            authenticationService.register($scope.user);
            $state.go('home');
        }
        $scope.isLoggedIn = authenticationService.isLoggedIn();
        console.log($scope.data);
    }
]);