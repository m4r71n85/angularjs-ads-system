'use strict';

app.controller('homeController',
['ads', 'allCategories', 'allTowns', 'adsFilterHelper', 'adsService', 'authSessionHelper', '$scope', 'itemsPerPage',
    function (ads, allCategories, allTowns, adsFilterHelper, adsService, authSessionHelper, $scope, itemsPerPage) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.allCategories = allCategories;
        $scope.allTowns = allTowns;
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
    }
]);