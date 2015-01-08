app.directive('headerMenu',
    ['authenticationService', 'authSessionHelper',
    function (authenticationService, authSessionHelper) {
        return {
            restrict: 'AE',
            templateUrl: '/app/directives/headerMenu/headerMenu.html',
            replace: true,
            controller: [
                'authenticationService', 'authSessionHelper', '$scope', '$state',
                function (authenticationService, authSessionHelper, $scope, $state) {
                    $scope.$state = $state;

                    $scope.headerMenuItems = [
                        { title: "Home", sref: "home" },
                        { title: "My Ads", sref: "userAds", authenticated: true },
                        { title: "Publish New Ad", sref: "publish", authenticated: true },
                        { title: "Edit Profile", sref: "userProfile", authenticated: true }
                    ];


                    $scope.logout = function () {
                        authenticationService.logout();
                        $state.go('home');
                    }

                    $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                    $scope.username = authSessionHelper.getUsername()

                    $scope.$on('authState', function () {
                        $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                        $scope.username = authSessionHelper.getUsername()
                    });
                }
            ]
        }
    }]);