//
// Application main script
//
'use strict';

//
// Application services 
//
angular.module('app.services', ['app.services.auth']);

//
// Application controllers
//
angular.module('app.controllers', ['app.controllers.home', 'app.controllers.login', 'app.controllers.about']);


angular.module('app', ['ngRoute', 'ngTouch', 'app.controllers', 'app.services']).
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
