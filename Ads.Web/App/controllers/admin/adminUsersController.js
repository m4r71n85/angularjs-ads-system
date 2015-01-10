'use strict';

app.controller('adminUsersController',
['users', 'itemsPerPage', '$state', '$scope', 'adminUserService', 'adsFilterHelper',
    function (users, itemsPerPage, $state, $scope, adminUserService, adsFilterHelper) {
        $scope.itemsPerPage = itemsPerPage;
        $scope.users = users;
        
        function updatePageAds() {
            adminUserService.getUsers().then(
                function (data) {
                    $scope.users = data;
                })
        }


        $scope.loadPage = function () {
            adsFilterHelper.setPage($scope.currentPage);
            updatePageAds();
        }
    }
]);