'use strict';

app.factory('authenticationService', [
    '$http', 'toaster', '$q', 'apiUrl',
    function ($http, toaster, $q, apiUrl) {

        function register(user){
            var deferred = $q.defer();
            $http.post(apiUrl + 'api/user/register', user)
                .success(function (data) {
                    setSession(data);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    console.log("error!");
                    console.log(data);
                    deferred.reject(data, status);
                });
            return deferred.promise;
        }

        function setSession(data) {
           console.log(data)
        }

        return ({
            register: register
        });
    }
])