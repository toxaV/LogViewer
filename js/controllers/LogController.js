angular.module('logControllerModule', ['logServiceModule', 'ngTable'])
    .controller('logController', function ($scope, $filter, $modal, $log, logService, ngTableParams) {

        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10,
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            getData: function ($defer, params) {
                logService.GetData(100, 0).then(function(instances){
                    params.total(instances.length);

                    var orderedData = params.sorting() ?
                        $filter('orderBy')(instances, params.orderBy()) :
                        instances;

                    var filteredData = params.filter() ?
                        $filter('filter')(orderedData, params.filter()) :
                        orderedData;

                    $defer.resolve(filteredData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                });
            },
            total: 100
        });

        $scope.tableParamsComponents = new ngTableParams({
        	count: 0 // hides pager
        }, {
        	counts: [] // hides page sizes
        });
    });