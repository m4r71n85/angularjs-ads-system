'use strict';

app.factory('authenticationService', [
    '$http', '$cookies', '$q', '$rootScope', 'toaster', 'apiUrl',
    function ($http, $cookies, $q, $rootScope, toaster, apiUrl) {
        //var sessionObj = {},
        //    tokenObj = {},
        //    usernameObj = {},
        //    isLoggedInObj = {};

        function register(user){
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

        function login(user) {
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

        function setSession(data) {
            $cookies.userSession = JSON.stringify(data);
            $rootScope.$broadcast('login');
        }

        function getSession() {
            if ($cookies.userSession) {
                return JSON.parse($cookies.userSession);
            }
            return false;
        }

        function getToken() {
            return getSession().access_token;
        }

        function getUsername() {
            return getSession().username;
        }

        function isLoggedIn() {
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