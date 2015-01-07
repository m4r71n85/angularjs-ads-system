app.directive('headerMenu',
    ['authenticationService',
    function (authenticationService) {
        return {
            restrict: 'AE',
            templateUrl: '/app/directives/headerMenu/headerMenu.html',
            replace: true,
            controller: [
                '$scope', '$state', function ($scope, $state) {
                    $scope.$state = $state;

                    $scope.headerMenuItems = [
                        { title: "Home", sref: "home" },
                        { title: "My Ads", sref: "#", authenticated: true },
                        { title: "Publish New Ad", sref: "#", authenticated: true },
                        { title: "Edit Profile", sref: "#", authenticated: true }
                    ];

                    $scope.isLoggedIn = authenticationService.isLoggedIn();
                    $scope.$on('login', function () {
                        $scope.isLoggedIn = authenticationService.isLoggedIn();
                    });
                }
            ]
        }
    }]);