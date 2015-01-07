app.directive('loginRegisterMenu',
    ['authenticationService',
    function (authenticationService) {
        return {
            restrict: 'AE',
            templateUrl: '/app/directives/loginRegisterMenu/loginRegisterMenu.html',
            replace: true,
            controller: [
                '$scope', '$state', function ($scope, $state) {
                    $scope.$state = $state;

                    $scope.loginRegisterMenuItems = [
                        { title: "Login", sref: "login" },
                        { title: "Register", sref: "register"},
                    ];

                    $scope.isLoggedIn = authenticationService.isLoggedIn();
                    $scope.$on('authState', function () {
                        $scope.isLoggedIn = authenticationService.isLoggedIn();
                    });
                }
            ]
        }
    }]);