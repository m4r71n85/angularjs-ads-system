'use strict';

var app = angular.module('app', [
    'ui.bootstrap', 'ui.router', 'angular-loading-bar', 'toaster']);

app.config([
    '$stateProvider', '$httpProvider', '$urlRouterProvider', '$provide',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $provide) {

        $provide.constant('apiUrl', 'http://localhost:1337/');

        //================================================
        // Make urls case insensitive
        //================================================
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.path(), normalized = path.toLowerCase();
            if (path != normalized) {
                $location.replace().path(normalized);
            }
        });

        //================================================
        // Routes
        //================================================ 
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'App/templates/home.html',
        });
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'App/templates/login.html',
            controller: 'loginController'
        });

        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'App/templates/register.html',
            controller: 'registerController'
        });
    }
]);

