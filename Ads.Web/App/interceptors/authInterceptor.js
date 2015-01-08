app.factory('authInterceptor', ['$q', 'authSessionHelper', '$location',
    function ($q, authSessionHelper, $location) {

        'use strict';

        var checkNeedAuthToken = function (config) {

            if (config.url.toLowerCase().indexOf("api") > -1) {
                return true;
            }

            return false;

        };

        var addAuthToken = function (config) {
            if (!checkNeedAuthToken(config)) return;

            config.headers = config.headers || {};
            var authData = "1";//authHelper.getAuth();
            if (authData) {
                config.headers.Authorization = 'Bearer ' + 1;//authData.token;
            }
        };

        var request = function (config) {
            addAuthToken(config);

            return config;
        };

        var responseError = function (rejection) {
            if (rejection.status === 403 || rejection.status === 401) {
                //authHelper.clearAuth();
                $location.url('/account/login');
            }
            return $q.reject(rejection);
        };

        return {
            request: request,
            responseError: responseError
        };
    }]);