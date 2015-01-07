'use strict';

app.directive('navigationMenu',
    ['authenticationService',
    function (authenticationService) {
    return {
        restrict: 'AE',
        replace:true,
        templateUrl: '/app/directives/navigationMenu/navigationMenu.html',
        controller: [
            '$scope', '$state', function ($scope, $state) {
                $scope.$state = $state;

                $scope.navigationMenuItems = [
                    { title: "Home", sref: "home" },
                    { title: "My Ads", sref: "#", authenticated: true },
                    { title: "Publish New Ad", sref: "#", authenticated: true },
                    { title: "Edit Profile", sref: "#", authenticated: true}
                ];

                $scope.isLoggedIn = authenticationService.isLoggedIn();
                $scope.$on('authState', function () {
                    $scope.isLoggedIn = authenticationService.isLoggedIn();
                });
            }
        ]
    }
}]);