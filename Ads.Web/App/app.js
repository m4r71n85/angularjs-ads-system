'use strict';

var app = angular.module('app', [
    'ui.bootstrap', 'ui.router', 'angular-loading-bar', 'toaster', 'ngCookies']);

app.config([
    '$stateProvider', '$httpProvider', '$urlRouterProvider', '$provide',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $provide) {

        $provide.constant('apiUrl', 'http://localhost:1337/');
        $provide.constant('itemsPerPage', 3);

        //================================================
        //add an request interceptor
        //================================================
        $httpProvider.interceptors.push('authInterceptor');

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

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'App/templates/home.html',
            controller: 'homeController',
            resolve: {
                allCategories: [
                    'menuItemsServices', function (menuItemsServices) {
                        return menuItemsServices.getAllCategories();
                    }],
                allTowns: [
                    'menuItemsServices', function (menuItemsServices) {
                        return menuItemsServices.getAllTowns();
                    }],
                ads: [
                    'adsService', function (adsService) {
                        return adsService.getAds();
                    }
                ]
            },
        });

        $stateProvider.state('publish', {
            url: '/publish',
            templateUrl: 'App/templates/publish.html',
            controller: 'publishController',
            resolve: {
                allCategories: [
                    'menuItemsServices', function (menuItemsServices) {
                        return menuItemsServices.getAllCategories();
                    }],
                allTowns: [
                    'menuItemsServices', function (menuItemsServices) {
                        return menuItemsServices.getAllTowns();
                    }],
            }
        });
    }
]);

