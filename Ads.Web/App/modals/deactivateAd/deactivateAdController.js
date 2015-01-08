'use strict';

app.controller('deactivateAdController',
    ['$scope', '$modalInstance', 'ad', function ($scope, $modalInstance, ad) {

        $scope.ad = ad;

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]
);