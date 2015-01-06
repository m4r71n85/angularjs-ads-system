'use strict';

app.factory('menuItemServices', [
    '$http', 'notificationService', '$q', 'apiUrl',
    function ($http, notificationService, $q, apiUrl) {
         function getCategories() {
             var deferred = $q.defer();
             $http.get(apiUrl + 'api/towns')
                 .success(function (data) {
                     deferred.resolve(data);
                 })
                 .error(function (data, status) {
                     deferred.reject(data, status);
                 });
             return deferred.promise;
        }
        function getTowns() {
            var deferred = $q.defer();
            $http.get(apiUrl +'api/categories')
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        return ({
            getCategories: getCategories
        });
    }
])