(function() {
    angular.module('app.controllers.home', []).controller('HomeController', ['$scope', '$log', 'credentials', HomeController]);

    function HomeController($scope, $log, credentials) {

        $scope.greeting = {
            id : credentials.username,
            pass : credentials.password
        }

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("Home controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("Home controller is destroyed");
        });
    }
})();
