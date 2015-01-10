'use strict';

app.factory('adminUserService', [
    'adsFilterHelper', '$http', '$q', 'toaster', 'apiUrl',
    function (adsFilterHelper, $http, $q, toaster, apiUrl) {
        var settings = adsFilterHelper.getSettings();

        var getUsers = function () {
            var deferred = $q.defer();
            $http.get(apiUrl + 'api/admin/users', {
                params: {
                    startpage: adsFilterHelper.getPage(),
                    pagesize: settings.pageSize*2,
                    //sortBy: adsFilterHelper.getSortBy()
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

        var deleteUser = function (username) {
            var deferred = $q.defer();
            $http.delete(apiUrl + 'api/admin/user/' + username)
            .success(function (data) {
                toaster.pop('success', '', data.message);
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data, status);
            });
            return deferred.promise;
        }

        return ({
            getUsers: getUsers,
            deleteUser: deleteUser
        });
    }
])