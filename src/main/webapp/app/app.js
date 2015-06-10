(function() {

    angular.module('app', ['ngRoute']).config(function($routeProvider, $httpProvider) {

        $routeProvider.when('/', {
            templateUrl : 'views/home.html',
            controller : 'home'
        }).when('/login', {
            templateUrl : 'views/login.html',
            controller : 'navigation'
        }).otherwise('/');

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    }).controller('home', function() {
        console.log('home controller');
    }).controller('navigation', function() {
        console.log('navigation controller');
    });

})();