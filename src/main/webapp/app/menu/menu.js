//
// Directive 'menu'
//
(function() {
    angular.module('app.directives.menu', []).directive('menu', ['$log', MenuDirective]);

    function MenuDirective($log) {
        $log.debug('compile function');

        return {
            restrict: 'E',
            replace: true,
            scope: {
                loc: '@location',
                menus: '='
            },
            link: function($scope, $element) {
               console.log('Link function');


            },
            templateUrl: 'app/menu/menu.html'
        };
    }
})();
