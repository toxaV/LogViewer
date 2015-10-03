angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
	gettextCatalog.
        setStrings('ru', {
        	"Logs": "Логи"
        }
    );
}
]);