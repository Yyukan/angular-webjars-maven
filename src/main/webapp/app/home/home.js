(function() {
    angular.module('app.controllers.home', []).controller('HomeController',
    ['$scope', '$log', 'AuthService', HomeController]);

    function HomeController($scope, $log, AuthService) {

        // flag which controls menu appearing
        $scope.showmenu = true;

        //this is the toggle function
        $scope.toggleMenu = function() {
            $scope.showmenu = ($scope.showmenu) ? false : true;
            $log.debug("Menu is shown:" + $scope.showmenu);
        }

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
