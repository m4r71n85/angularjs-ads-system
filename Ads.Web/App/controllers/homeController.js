'use strict';

app.controller('homeController',
['ads', 'allCategories', 'allTowns', 'adsService', 'authSessionHelper', '$scope', 'itemsPerPage',
    function (ads, allCategories, allTowns, adsService, authSessionHelper, $scope, itemsPerPage) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.allCategories = allCategories;
        $scope.allTowns = allTowns;
        $scope.ads = ads;
        $scope.pageSettings = adsService.getSettings();

        $scope.loadPage = function () {
            adsService.setPage($scope.currentPage);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.filterCategory = function (categoryId) {
            adsService.setCategory(categoryId);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                });
        }

        $scope.filterTown = function (townId) {
            adsService.setTown(townId);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.isLoggedIn = authSessionHelper.isLoggedIn();
        $scope.$on('authState', function () {
            $scope.isLoggedIn = authSessionHelper.isLoggedIn();
        });
    }
]);