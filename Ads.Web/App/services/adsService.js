"http://localhost:1337/api/ads?pagesize=3&startpage=2"

'use strict';

app.factory('adsService', [
    'adsFilterHelper', '$http', '$q', 'toaster', 'apiUrl',
    function (adsFilterHelper, $http, $q, toaster, apiUrl) {
        var settings = adsFilterHelper.getSettings();

        var getAds = function () {
            var deferred = $q.defer();
            $http.get(apiUrl + 'api/ads', {
                params: {
                    startpage: adsFilterHelper.getPage(),
                    pagesize: settings.pageSize,
                    categoryid: adsFilterHelper.getCategory(),
                    townid: adsFilterHelper.getTown(),
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

        var getAd = function (adId) {
            var deferred = $q.defer();
            $http.get(apiUrl + 'api/user/ads/' + adId)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data, status);
            });
            return deferred.promise;
        }

        var getUserAds = function () {
            var deferred = $q.defer();
            $http.get(apiUrl + 'api/user/ads', {
                params: {
                    startpage: adsFilterHelper.getPage(),
                    pagesize: settings.pageSize,
                    status: adsFilterHelper.getStatus()
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

        var publishAd = function (ad) {
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/ads', ad)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data, status);
            });
            return deferred.promise;
        }
       
        var deactivateAd = function (adId) {
            var deferred = $q.defer();
            $http.put(apiUrl + 'api/user/ads/deactivate/' + adId)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data, status);
            });
            return deferred.promise;
        }

        return ({
            getAds: getAds,
            getAd: getAd,
            getUserAds: getUserAds,
            publishAd: publishAd,
            deactivateAd: deactivateAd
        });
    }
])