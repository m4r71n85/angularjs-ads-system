'use strict';

app.controller('userAdsController',
['ads', 'adsFilterHelper', 'adsService', '$scope', 'itemsPerPage',
    function (ads, adsFilterHelper, adsService, $scope, itemsPerPage) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.ads = ads;
        adsFilterHelper.resetSettings()
        $scope.pageSettings = adsFilterHelper.getSettings();

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.filterCategory = function (categoryId) {
            adsFilterHelper.setCategory(categoryId);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                });
        }

        $scope.filterTown = function (townId) {
            adsFilterHelper.setTown(townId);
            adsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }
    }
]);