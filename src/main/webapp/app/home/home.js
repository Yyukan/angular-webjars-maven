//
// Controller of the 'Home' view
//
(function() {
    angular.module('app.controllers.home', []).controller('HomeController',
    ['$scope', '$log', 'AuthService', HomeController]);

    function HomeController($scope, $log, AuthService) {

        $log.debug('HomeController init');

        $scope.greeting = {
            id : AuthService.credentials.username,
            pass : AuthService.credentials.password
        }

        $scope.authenticated = AuthService.authenticated;

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("Home controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("Home controller is destroyed");
        });
    }
})();
