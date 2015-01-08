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

        $scope.deactivate = function (id) {
            $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            }).result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        $scope.isPublishedOrWaiting = function (status) {
            return (status == 'WaitingApproval' || status == 'Published');
        }
    }
]);