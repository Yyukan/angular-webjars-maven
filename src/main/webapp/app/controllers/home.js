(function() {
    angular.module('app.controllers.home', []).controller('HomeController', ['$scope', '$log', '$location', 'credentials', HomeController]);

    function HomeController($scope, $log, $location, credentials) {

        // flag which controls menu appearing
        $scope.showmenu=false;

        //this is the toggle function
        $scope.toggleMenu = function(){
            $scope.showmenu=($scope.showmenu) ? false : true;
            $log.debug("Menu is shown:" + $scope.showmenu);
        }

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
