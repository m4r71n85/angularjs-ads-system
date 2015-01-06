'use strict';

app.factory('authenticationService', [
    '$http', '$cookies', '$q', 'toaster', 'apiUrl',
    function ($http, $cookies, $q, toaster, apiUrl) {
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

        function setSession(data) {
            $cookies.userSession = JSON.stringify(data);
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
            getSession: getSession,
            getToken: getToken,
            getUsername: getUsername,
            isLoggedIn: isLoggedIn
        });
    }
])