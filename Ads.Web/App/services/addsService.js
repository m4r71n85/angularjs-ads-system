"http://localhost:1337/api/ads?pagesize=3&startpage=2"

'use strict';

app.factory('adsService', [
    '$http', '$q', 'toaster', 'apiUrl',
    function ($http, $q, toaster, apiUrl) {

        var settings = {};

        var resetSettings = function () {
            settings = { startPage: 1, pageSize: 3, townId: '', categoryId: '' };
        }
        
        var getAds = function () {
            var deferred = $q.defer();
            $http.get(apiUrl + 'api/ads', {
                params: {
                    startpage: settings.startPage,
                    pagesize: settings.pageSize,
                    townid: settings.townId,
                    categoryid: settings.categoryId,
                }
            })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data, status);
            });
            return deferred.promise;
        }

        var setPage = function (page) {
            settings.startPage = page;
        }

        var getPage = function (page) {
            return settings.startPage;
        }

        var setCategory = function (categoryId) {
            settings.categoryId = categoryId;
            settings.startPage = 1;
        }

        var setTown = function (townId) {
            settings.townId = townId;
            settings.startPage = 1;
        }

        resetSettings();

        return ({
            getAds: getAds,
            setPage: setPage,
            setCategory: setCategory,
            setTown: setTown,
            getPage: getPage
        });
    }
])