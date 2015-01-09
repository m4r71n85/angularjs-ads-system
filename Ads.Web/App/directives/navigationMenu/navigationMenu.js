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
                $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                $scope.isAdmin = authSessionHelper.isAdmin();

                if ($scope.isLoggedIn && $scope.isAdmin) {
                    $scope.navigationMenuItems = [
                        { title: "Ads", sref: "adminHome", authenticated: true },
                        { title: "Users", sref: "users", authenticated: true },
                        { title: "Categories", sref: "categories", authenticated: true },
                        { title: "Town", sref: "towns", authenticated: true }
                    ];
                } else {
                    $scope.navigationMenuItems = [
                        { title: "Home", sref: "home" },
                        { title: "My Ads", sref: "userAds", authenticated: true },
                        { title: "Publish New Ad", sref: "publish", authenticated: true },
                        { title: "Edit Profile", sref: "userProfile", authenticated: true }
                    ];
                }
                $scope.$on('authState', function () {
                    $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                    $scope.isAdmin = authSessionHelper.isAdmin();
                });
            }
        ]
    }
}]);