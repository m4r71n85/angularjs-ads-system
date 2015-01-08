'use strict';

app.controller('userAdsController',
['ads', 'adsFilterHelper', 'adsService', '$modal', '$scope', 'itemsPerPage',
    function (ads, adsFilterHelper, adsService, $modal, $scope, itemsPerPage) {
        adsFilterHelper.resetSettings();
        $scope.itemsPerPage = itemsPerPage;
        $scope.ads = ads;
        $scope.pageSettings = adsFilterHelper.getSettings();

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            adsService.getUserAds().then(
                function (data) {
                    $scope.ads = data;
                })
        }

        $scope.deactivate = function (ad) {
            $modal.open({
                templateUrl: '/app/modals/deactivateAd/deactivateAd.html',
                controller: 'deactivateAdController',
                resolve: {
                    ad: function () {
                        return ad;
                    }
                }
            }).result.then(function () {
                adsService.deactivateAd(ad.id).then(
                    function () {
                        ad.status = 'Inactive';
                    });
            });
        }

        $scope.isPublishedOrWaiting = function (status) {
            return (status == 'WaitingApproval' || status == 'Published');
        }
    }
]);