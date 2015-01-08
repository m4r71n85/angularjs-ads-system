'use strict';

app.controller('userAdsController',
['ads', 'adsFilterHelper', 'adsService', '$modal', '$scope', 'itemsPerPage',
    function (ads, adsFilterHelper, adsService, $modal, $scope, itemsPerPage) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.ads = ads;
        adsFilterHelper.resetSettings()
        $scope.pageSettings = adsFilterHelper.getSettings();

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            adsService.getUserAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.deactivate = function (ads) {
            $modal.open({
                templateUrl: '/app/modals/deactivateAd/deactivateAd.html',
                controller: 'deactivateAdController',
                //size: size,
                resolve: {
                    ad: function () {
                        return ads;
                    }
                }
            });
        }

        $scope.isPublishedOrWaiting = function (status) {
            return (status == 'WaitingApproval' || status == 'Published');
        }
    }
]);