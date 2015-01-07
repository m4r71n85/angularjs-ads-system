app.directive('navigationMenu', [function () {
    return {
        restrict: 'AE',
        replace:true,
        templateUrl: 'app/directives/navigationMenu/navigarionMenu.html',
        controller: [
            '$scope', '$state', function ($scope, $state) {
                $scope.$state = $state;

                $scope.menuItems = [
                    { title: "Home", sref: "home" },
                    { title: "My Ads", sref: "#" },
                    { title: "Publish New Ad", sref: "#" },
                    { title: "Edit Profile", sref: "#" }
                ];
            }
        ]
    }
}]);