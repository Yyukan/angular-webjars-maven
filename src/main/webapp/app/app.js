//
// Application main script
//
'use strict';

//
// Application configuration
//
angular.module('app.configuration', []).constant("configuration", {
    'version' : '0.0.1'
});

//
// Application services 
//
angular.module('app.services', ['app.services.auth']);

//
// Application controllers
//
angular.module('app.controllers', ['app.controllers.home', 'app.controllers.login', 'app.controllers.about']);

//
// Application directives
//
angular.module('app.directives', ['app.directives.menu']);

//
// Application config and run
//
angular.module('app', ['ngRoute', 'ngTouch', 'app.configuration', 'app.controllers', 'app.services', 'app.directives']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl : 'app/home/home.html',
            controller : 'HomeController'
        }).when('/login', {
            templateUrl : 'app/auth/login.html',
            controller : 'LoginController'
        }).when('/about', {
            templateUrl : 'app/about/about.html',
            controller : 'AboutController'
        }).otherwise('/');

}])
.run(['$log', '$location', 'AuthService', function($log, $location, AuthService) {
        if (!AuthService.authenticated)
        {
            $log.debug("App run");
            $location.path("/login");
        }
}]);
