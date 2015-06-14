//
// Application main script
//
'use strict';

angular.module('app', ['ngRoute', 'app.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl : 'views/home.html',
            controller : 'HomeController'
        }).when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginController'
        }).otherwise('/');

}])
.factory('credentials', function() {
    var credentials = {
        username : 'somename',
        password : 'somepass'
    };

    return credentials;
})
.run(function($location, $rootScope) {
        if (!$rootScope.authenticated)
        {
            $location.path("/login");
        }
});
