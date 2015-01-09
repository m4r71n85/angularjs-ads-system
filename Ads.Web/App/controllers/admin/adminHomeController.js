'use strict';

app.controller('adminHomeController',
['ads', 'allCategories', 'allTowns', 'adsFilterHelper', 'adminAdsService', 'authSessionHelper', '$scope', 'itemsPerPage',
    function (ads, allCategories, allTowns, adsFilterHelper, adminAdsService, authSessionHelper, $scope, itemsPerPage) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.allCategories = allCategories;
        $scope.allTowns = allTowns;
        $scope.ads = ads;
        $scope.pageSettings = adsFilterHelper.getSettings();

        function updatePageAds() {
            adminAdsService.getAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            updatePageAds()
        }

        $scope.filterCategory = function (categoryId) {
            adsFilterHelper.setCategory(categoryId);
            updatePageAds()
        }

        $scope.filterTown = function (townId) {
            adsFilterHelper.setTown(townId);
            updatePageAds()
        }

        $scope.$on('statusSet', function () {
            updatePageAds()
        });

        $scope.isLoggedIn = authSessionHelper.isLoggedIn();
        $scope.$on('authState', function () {
            $scope.isLoggedIn = authSessionHelper.isLoggedIn();
        });
    }
]);