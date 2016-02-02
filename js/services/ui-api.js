/**
 * Created by Administrator on 2015/12/15.
 */
angular.module('app')
.service('uiApi',['$document', '$q', '$http', function ($document, $q, $http) {
        var loaded = [];
        var promise = false;
        var deferred = $q.defer();

        this.getLogOnlineRecord = function(url , params){
            $http({
                url:url,
                method:'POST',
                params:params
            }).success(function(req){
                deferred.resolve(req);
            }).error(function(err){
                deferred.reject(err);
            });

            return deferred.promise;

        }

        this.getRecHarge = function(url , params) {
            $http({
                url:url,
                method:'POST',
                params:params
            }).success(function(req){
                deferred.resolve(req);
            }).error(function(err){
                deferred.reject(err);
            });

            return deferred.promise;
        }

    }]);