angular.module('ServiceAdministration', [
    'ngRoute',
    'ngTable',
    'ngResource',
    'appRoutes',
    'ui.bootstrap',
    'logControllerModule',
    'logServiceModule',
	'localizationControllerModule',
    'configuration',
    'gettext',
    'angularSoap'])

    .run(function (gettextCatalog) {
        gettextCatalog.currentLanguage = 'en';
    }
);