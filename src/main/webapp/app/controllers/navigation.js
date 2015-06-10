(function() {
    angular.module('app.controllers.navigation', []).controller('NavigationController', ['$scope', '$log', NavigationController]);

    function NavigationController($scope, $log) {
        $log.debug('navigation controller');
        $scope.credentials = {
            username : 'someusername',
            password : 'somepassword'
        };
        $scope.login = function() {
            $log.debug('logging in');
        };
    }
})();
