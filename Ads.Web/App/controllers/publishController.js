/// <reference path="../services/adsService.js" />
'use strict';

app.controller('publishController',
['adsService', 'allCategories', 'allTowns', '$state', '$scope',
    function (adsService ,allCategories, allTowns, $state, $scope) {
        $scope.ad = {};
        $scope.allCategories = allCategories;
        $scope.allTowns = allTowns;

        $scope.publish = function () {
            adsService.publishAd($scope.ad);
        }

        $scope.fileSelected = function (fileInputField) {
            delete $scope.ad.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.ad.imageDataUrl = reader.result;
                    $("#image-preview").attr("src", reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    }
]);