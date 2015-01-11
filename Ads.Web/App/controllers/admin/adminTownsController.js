'use strict';

app.controller('adminTownsController',
['towns', 'itemsPerPage', 'adsFilterHelper', 'adminTownService', '$modal', '$state', '$scope',
    function (towns, itemsPerPage, adsFilterHelper, adminTownService, $modal, $state, $scope) {
        $scope.towns = towns;
        $scope.itemsPerPage = itemsPerPage;


        $scope.delete = function (category) {
            $modal.open({
                templateUrl: '/app/modals/adminDeleteCategory/adminDeleteCategory.html',
                controller: 'adminDeleteCategoryController',
                resolve: {
                    category: function () {
                        return category;
                    }
                }
            }).result.then(function () {
                adminTownService.deleteCategory(category.id).then(
                    function () {
                        updatePageTowns();
                    });
            });
        }

        function updatePageTowns() {
            adminTownService.getTowns().then(
                function (data) {
                    $scope.towns = data;
                });
        }

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            updatePageTowns();
        }

    }
]);
