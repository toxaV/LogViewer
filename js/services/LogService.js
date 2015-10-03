angular.module('logServiceModule', ['configuration'])
    .factory('logService', ['$resource', 'serverManager',

        function ($resource, serverManager) {

        var resource = $resource(serverManager + '/logs/:id');

        return resource;
}]);