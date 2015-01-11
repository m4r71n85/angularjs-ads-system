'use strict';

app.controller('adminCreateTownController ',
['adminCategoryService', '$state', '$scope',
    function (adminCategoryService, $state, $scope) {
        $scope.create = function () {
            adminCategoryService.createCategory($scope.category).then(
                function () {
                    $state.go('adminCategories')
                });
        }
    }
]);
