//
// Directive 'menu'
//
(function() {
    angular.module('app.directives.menu', []).directive('menu', ['$log', 'configuration', MenuDirective]);

    function MenuDirective($log, configuration) {
        $log.debug('Compile function');

        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: function($scope) {
                $scope.version = configuration.version;
            },
            link: function($scope, $element) {
               console.log('Link function');
            },
            templateUrl: 'app/menu/menu.html'
        };
    }
})();
