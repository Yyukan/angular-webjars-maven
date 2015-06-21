//
// Application main script
//
'use strict';

angular.module('app', ['ngRoute', 'ngTouch', 'app.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl : 'views/home.html',
            controller : 'HomeController'
        }).when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginController'
        }).when('/about', {
            templateUrl : 'views/about.html',
            controller : 'AboutController'
        }).otherwise('/');

}])
.factory('credentials', function() {
    var credentials = {
        username : 'somename',
        password : 'somepass'
    };

    return credentials;
})
.directive('menu', function() {
        console.log('compile function');

        return {
            restrict: 'E',
            replace: true,
            scope: {
                loc: '@location',
                menus: '='
            },
            link: function($scope, $element) {
               console.log('Link function');


            },
            templateUrl: 'views/menu.html'
        };
    })
.run(function($location, $rootScope) {
        if (!$rootScope.authenticated)
        {
            $location.path("/login");
        }
});
