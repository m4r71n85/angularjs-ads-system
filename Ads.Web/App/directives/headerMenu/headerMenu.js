﻿app.directive('headerMenu',
    ['authenticationService',
    function (authenticationService) {
        return {
            restrict: 'AE',
            templateUrl: '/app/directives/headerMenu/headerMenu.html',
            replace: true,
            controller: [
                '$scope', '$state', function ($scope, $state) {
                    $scope.$state = $state;

                    //$scope.loginRegisterMenuItems = [
                    //    { title: "Login", sref: "login" },
                    //    { title: "Register", sref: "register"},
                    //];

                    $scope.isLoggedIn = authenticationService.isLoggedIn();
                    $scope.$on('login', function () {
                        $scope.isLoggedIn = authenticationService.isLoggedIn();
                    });
                }
            ]
        }
    }]);