angular.module('logControllerModule', ['logServiceModule', 'ngTable'])
    .controller('logController', function ($scope, $filter, $modal, $log, logService, ngTableParams) {

        var strLogs = localStorage.getItem('logs');
        $scope.logs = strLogs != null ? JSON.parse(strLogs) : [];

        $scope.init = function () {
            var severityList = ["Warn","Information","Error"];
            for (var i = 1; i <= 100; i++) {

                var severityRandom = Math.round(Math.random() * (severityList.length - 1));

                var log = {
                    LogID: i,
                    Severity: severityList[severityRandom],
                    Title: 'GetAccountInformation',
                    Timestamp: '2015-09-30 10:21:09.300',
                    MachineName: 'RD000D3AB02CD6',
                    ProcessName: 'd:\\windows\\system32\\inetsrv\\w3wp.exe',
                    Message: 'Operation completed successfully',
                    FormattedMessage: 'HTML'
                };
                $scope.logs.push(log);
            }

            localStorage.setItem('logs', JSON.stringify($scope.logs));
        };

        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10,
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            getData: function ($defer, params) {
                //logService.query(function (instances) {
                //	params.total(instances.length);

                //	var orderedData = params.sorting() ?
                //        $filter('orderBy')(instances, params.orderBy()) :
                //        instances;

                //	var filteredData = params.filter() ?
                //        $filter('filter')(orderedData, params.filter()) :
                //        orderedData;

                //	$defer.resolve(filteredData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                //});
                $defer.resolve($scope.logs.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            },
            total: $scope.logs.lenght
        });

        //$scope.tableParamsComponents = new ngTableParams({
        //	count: 0 // hides pager
        //}, {
        //	counts: [] // hides page sizes
        //});
    });