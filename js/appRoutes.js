angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider) {

        	$routeProvider
                .when('/log', {
                	templateUrl: 'views/logs.html',
                	controller: 'logController'
                })
				.otherwise({
					redirectTo: '/log'
				});
        }
    ]);