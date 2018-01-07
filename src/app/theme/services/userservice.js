/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('userService', userService);

  /** @ngInject */
  function userService($q, $http) {
    var privateUserList = [];

    reload();


    function reload() {
      $http.get('http://localhost:2324/employees')
             .then(
               function(res){
                 res.data.forEach( function( element ) {
                    privateUserList.push( element );
                    console.log( element );
                 });
                  //$scope.todos = res.data
                  console.log( privateUserList );;
              }
            );
    }

    return {
      users: function () {
         return [].concat(privateUserList);
      },
      addUser: function (username, email) {
         privateUserList.push({username: username, email: email});
       },
      deleteUser:  function ( id ) {
        $http.delete( 'http://localhost:2324/employees/' + id )
                .then( function( res ) {
                   reload();
                   console.log( "done" );
                } )
      },
      reload: function () {
         privateUserList = [];
         reload();
      }
    }
  }

})();
