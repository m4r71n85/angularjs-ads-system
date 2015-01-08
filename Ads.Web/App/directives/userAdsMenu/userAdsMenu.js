'use strict';

app.directive('userAdsMenu',
    ['authSessionHelper', function (authSessionHelper) {
    return {
        restrict: 'AE',
        replace:true,
        templateUrl: '/app/directives/userAdsMenu/userAdsMenu.html',
        controller: [
            'adsFilterHelper', '$state', '$stateParams', '$scope',
            function (adsFilterHelper, $state, $stateParams, $scope) {
                adsFilterHelper.resetSettings();
                $scope.$state = $state;
                $scope.currentStatus = adsFilterHelper.getStatus();

                $scope.userAdsMenuItems = [
                    { title: "All", status: "" },
                    { title: "Published", status: "published" },
                    { title: "Waiting Approval", status: "waitingApproval" },
                    { title: "Inactive", status: "inactive" },
                    { title: "Rejected", status: "rejected" },
                ];

                $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                $scope.$on('authState', function () {
                    $scope.isLoggedIn = authSessionHelper.isLoggedIn();
                });
            }
        ]
    }
}]);