/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('users', {
      url: '/users',
      template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
      abstract: true,
      controller: 'UsersPageCtrl',
      title: 'Benutzer',
      sidebarMeta: {
        icon: 'ion-grid',
        order: 300,
      },
    }).state('users.userlist', {
      url: '/userlist',
      templateUrl: 'app/pages/user/userlist.html',
      title: 'Benutzerliste',
      sidebarMeta: {
        order: 0,
      },
    }).state('users.smart', {
      url: '/smart',
      templateUrl: 'app/pages/tables/smart/tables.html',
      title: 'Smart Tables',
      sidebarMeta: {
        order: 100,
      },
    });
$urlRouterProvider.when('/users','/users/userlist');
    //     .state('users', {
    //       url: '/users',
    //       templateUrl: 'app/pages/user/userlist.html',
    //
    //       controller: 'UsersPageCtrl',
    //       title: 'UserList',
    //       sidebarMeta: {
    //         icon: 'ion-grid',
    //         order: 300,
    //       },
    //     }).state('users.user', {
    //       url: '/user',
    //       templateUrl: 'app/pages/tables/basic/tables.html',
    //       title: 'Basic Tables',
    //       sidebarMeta: {
    //         order: 0,
    //       },
    //     })
    //
    //     //.state('tables.smart', {
    //     //   url: '/smart',
    //     //   templateUrl: 'app/pages/tables/smart/tables.html',
    //     //   title: 'Smart Tables',
    //     //   sidebarMeta: {
    //     //     order: 100,
    //     //   },
    //     //})
    // //  } )
    // //$urlRouterProvider.when('/u','/tables/basic');
  }

})();
