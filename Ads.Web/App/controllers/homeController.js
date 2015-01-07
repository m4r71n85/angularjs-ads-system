'use strict';

app.controller('homeController',
['ads', 'allCategories', 'allTowns', 'authenticationService', '$scope',
    function (ads, allCategories, allTowns, authenticationService, $scope) {

        $scope.allCategories = allCategories;
        $scope.allTowns = allTowns;
        $scope.ads = ads;

        $scope.isLoggedIn = authenticationService.isLoggedIn();
        $scope.$on('login', function () {
            $scope.isLoggedIn = authenticationService.isLoggedIn();
        });
    }
]);