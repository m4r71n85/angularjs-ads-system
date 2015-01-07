'use strict';

app.factory('authenticationService', [
    '$http', '$cookies', '$q', '$rootScope', 'toaster', 'apiUrl',
    function ($http, $cookies, $q, $rootScope, toaster, apiUrl) {

        var register = function(user) {
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/register', user)
                .success(function (data) {
                    setSession(data);
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
                    setSession(data);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    console.log("error!");
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        var setSession = function(data) {
            $cookies.userSession = JSON.stringify(data);
            $rootScope.$broadcast('login');
        }

        var getSession = function() {
            if ($cookies.userSession) {
                return JSON.parse($cookies.userSession);
            }
            return false;
        }

        var getToken = function() {
            return getSession().access_token;
        }

        var getUsername = function() {
            return getSession().username;
        }

        var isLoggedIn = function() {
            return !!getSession();
        }

        return ({
            register: register,
            login: login,
            getSession: getSession,
            getToken: getToken,
            getUsername: getUsername,
            isLoggedIn: isLoggedIn
        });
    }
])