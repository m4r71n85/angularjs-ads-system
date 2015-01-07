'use strict';

app.controller('homeController',
['authenticationService', '$scope',
    function (authenticationService, $scope) {
        $scope.isLoggedIn = authenticationService.isLoggedIn();
        console.log($scope.data);
        $scope.$on('login', function () {
            $scope.isLoggedIn = authenticationService.isLoggedIn();
            console.log($scope.isLoggedIn);
        });
    }
]);