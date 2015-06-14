(function() {
    angular.module('app.controllers.login', []).controller('LoginController', ['$rootScope', '$scope', '$log', '$location', 'credentials', LoginController]);

    function LoginController($rootScope, $scope, $log, $location, credentials) {

        $scope.credentials = credentials;

        $scope.login = function() {
            $log.debug('Function login() is called');

            $rootScope.authenticated = true;

            $location.path("/home");
        };

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("Login controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("Login controller is destroyed")
        });

    }
})();
