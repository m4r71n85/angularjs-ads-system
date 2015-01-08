'use strict';

app.directive('navigationMenu',
    ['authSessionHelper', function (authSessionHelper) {
    return {
        restrict: 'AE',
        replace:true,
        templateUrl: '/app/directives/navigationMenu/navigationMenu.html',
        controller: [
            '$scope', '$state', function ($scope, $state) {
                $scope.$state = $state;

                $scope.navigationMenuItems = [
                    { title: "Home", sref: "home" },
                    { title: "My Ads", sref: "userAds", authenticated: true },
                    { title: "Publish New Ad", sref: "publish", authenticated: true },
                    { title: "Edit Profile", sref: "#", authenticated: true}
                ];

                $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                $scope.$on('authState', function () {
                    $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                });
            }
        ]
    }
}]);