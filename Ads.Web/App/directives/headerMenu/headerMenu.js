app.directive('headerMenu',
    ['authenticationService',
    function (authenticationService) {
        return {
            restrict: 'AE',
            templateUrl: '/app/directives/headerMenu/headerMenu.html',
            replace: true,
            controller: [
                'authenticationService', '$scope', '$state',
                function (authenticationService, $scope, $state) {
                    $scope.$state = $state;

                    $scope.headerMenuItems = [
                        { title: "Home", sref: "home" },
                        { title: "My Ads", sref: "#", authenticated: true },
                        { title: "Publish New Ad", sref: "#", authenticated: true },
                        { title: "Edit Profile", sref: "#", authenticated: true }
                    ];


                    $scope.logout = function () {
                        authenticationService.logout();
                        $state.go('home');
                    }

                    $scope.isLoggedIn = authenticationService.isLoggedIn();

                    $scope.$on('authState', function () {
                        $scope.isLoggedIn = authenticationService.isLoggedIn();
                        $scope.username = authenticationService.getUsername()
                    });
                }
            ]
        }
    }]);