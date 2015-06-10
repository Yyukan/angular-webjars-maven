'use strict';

angular.module('app', ['ngRoute', 'app.controllers']).config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl : 'views/home.html',
        controller : 'HomeController'
    }).when('/login', {
        templateUrl : 'views/login.html',
        controller : 'NavigationController'
    }).otherwise('/');

});
