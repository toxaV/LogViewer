angular.module('logServiceModule', ['configuration'])
    .factory('logService', ['$soap','serverManager',

        function ($soap) {
            return {
                GetData: function(take, skip){
                    return $soap.post('http://enterpriselogview.cloudapp.net/LogViewService.svc', 'GetData', { take: take, skip: skip });
                }
            }
}]);