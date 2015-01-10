'use strict';

app.controller('adminDeleteUserController',
    ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user) {
        console.log(user);
        $scope.user = user;

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]
);