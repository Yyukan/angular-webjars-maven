(function() {
    angular.module('app.controllers.login', []).controller('LoginController',
    ['$scope', '$log', 'AuthService', LoginController]);

    function LoginController($scope, $log, AuthService) {

        $scope.credentials = AuthService.credentials;

        $scope.login = function() {
            AuthService.login($scope.credentials);
        };

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("Login controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("Login controller is destroyed")
        });

    }
})();
