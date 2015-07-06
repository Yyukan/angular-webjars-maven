//
// Controller of the 'About' view
//
(function() {
    angular.module('app.controllers.about', []).controller('AboutController', ['$scope', '$log', AboutController]);

    function AboutController($scope, $log) {

        $log.debug('AboutController init');

        $scope.$on('$viewContentLoaded', function() {
            $log.debug("About controller content is loaded")
        });

        $scope.$on('$destroy', function() {
            $log.debug("About controller is destroyed");
        });
    }
})();
