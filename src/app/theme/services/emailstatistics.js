/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('logsService', logsService);

  /** @ngInject */
  function logsService($q, $http) {
    var logsList = [];

    $http.get('http://localhost:2324/log?_limit=20')
           .then(
             function(res){
               res.data.forEach( function( element ) {
                  logsList.push( element );
               })});

    return {
      getLogs: function () {
                    //$scope.todos = res.data
                    return [].concat(logsList);
                }
      }
    }

})();
