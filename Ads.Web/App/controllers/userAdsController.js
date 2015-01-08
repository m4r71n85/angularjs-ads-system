﻿
app.controller('userAdsController',
['ads', 'adsFilterHelper', 'adsService', '$modal', '$state', '$scope', 'itemsPerPage',
    function (ads, adsFilterHelper, adsService, $modal, $state, $scope, itemsPerPage) {
        adsFilterHelper.resetSettings();
        $scope.itemsPerPage = itemsPerPage;
        $scope.ads = ads;
        $scope.pageSettings = adsFilterHelper.getSettings();

        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            setUserAds();
        }

        $scope.$on('statusSet', function () {
            setUserAds()
        });

        function setUserAds() {
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

        $scope.publishAgain = function (ad) {
            $modal.open({
                templateUrl: '/app/modals/publishAgainAd/publishAgainAd.html',
                controller: 'publishAgainAdController',
                resolve: {
                    ad: function () {
                        return ad;
                    }
                }
            }).result.then(function () {
                adsService.publishAgainAd(ad.id).then(
                    function () {
                        ad.status = 'WaitingApproval';
                    });
            });
        }

        $scope.delete = function (ad) {
            $modal.open({
                templateUrl: '/app/modals/deleteAd/deleteAd.html',
                controller: 'deleteAdController',
                resolve: {
                    ad: function () {
                        return ad;
                    }
                }
            }).result.then(function () {
                adsService.deleteAd(ad.id).then(
                    function () {
                        delete ad;
                    });
            });
        }

        $scope.edit = function (adId) {
            $state.go('editAd', { 'adId': adId });
        }

        $scope.isPublishedOrWaiting = function (status) {
            return (status == 'WaitingApproval' || status == 'Published');
        }
    }
]);