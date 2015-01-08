'use strict';

app.factory('authenticationService', [
    '$http', '$q', '$rootScope', 'toaster', 'authSessionHelper', 'apiUrl',
    function ($http, $q, $rootScope, toaster, authSessionHelper, apiUrl) {

        var register = function(user) {
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/register', user)
                .success(function (data) {
                    authSessionHelper.setSession(data);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    console.log("error!");
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        var login = function(user) {
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/login', user)
                .success(function (data) {
                    authSessionHelper.setSession(data);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    console.log("error!");
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        var logout = function (data) {
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/logout')
                .success(function (data) {
                    authSessionHelper.clearSession();
                    $rootScope.$broadcast('authState');
                })
                .error(function (data, status) {
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        return ({
            login: login,
            logout: logout,
            register: register,
        });
    }
])