angular.module('localizationControllerModule', [])
    .controller('localizationController', function ($scope, gettextCatalog) {

        $scope.languages = {
            current: gettextCatalog.currentLanguage,
            available: {
                'en': 'English',
                'ru': 'Русский'
            }
        };

        $scope.$watch('languages.current', function (lang) {
            if (!lang) {
                return;
            }

            gettextCatalog.setCurrentLanguage(lang);
        });
});