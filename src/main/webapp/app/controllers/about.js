(function() {
    angular.module('app.controllers.about', []).controller('AboutController', ['$scope', '$log', AboutController]);

    function AboutController($scope, $log, credentials) {

        // flag which controls menu appearing
        $scope.showmenu=false;

        //this is the toggle function
        $scope.toggleMenu = function(){
            $scope.showmenu=($scope.showmenu) ? false : true;
            $log.debug("Menu is shown:" + $scope.showmenu);
        }

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("About controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("About controller is destroyed");
        });
    }
})();
