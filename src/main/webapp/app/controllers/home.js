(function() {
    angular.module('app.controllers.home', []).controller('HomeController', ['$scope', '$log', HomeController]);

    function HomeController($scope, $log) {
        $log.debug('home controller');
        $scope.greeting = {
            id : 'Some Greeting Id',
            content : 'Some Greeting Content'
        }
    }
})();
