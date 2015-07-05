//
// Service for authentication
//
(function() {
    angular.module('app.services.auth', []).service('AuthService', ['$log', '$location', AuthService]);

    function AuthService($log, $location) {

        $log.debug("AuthService is created");

        var authService = {
            authenticated : false,
            credentials: {
                username : 'somename',
                password : 'somepass'
            }
        };

        authService.login = function(credentials) {
            $log.debug('AuthService login() is called');
            authService.authenticated = true;
            authService.credentials = credentials;

            $location.path("/home");
        };

        return authService;
    }
})();
