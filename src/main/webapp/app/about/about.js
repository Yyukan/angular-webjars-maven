//
// Controller of the 'About' view
//
(function() {
    angular.module('app.controllers.about', []).controller('AboutController', ['$scope', '$log', AboutController]);

    function AboutController($scope, $log) {

        // flag which controls menu appearing
        $scope.showmenu=true;

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
