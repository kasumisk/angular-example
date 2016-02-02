'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/table/online');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.chart', {
                  url: '/chart',
                  templateUrl: 'tpl/ui_chart.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load(['js/controllers/chart.js','vendor/jquery/hightcharts/highcharts.js','vendor/jquery/datatables/jquery.dataTables.min.js',
                              'vendor/jquery/datatables/dataTables.bootstrap.js',
                              'vendor/jquery/datatables/dataTables.bootstrap.css']);
                      }]
                  }
              })

              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'tpl/table_datatable.html'
              })

              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad){
                              return uiLoad.load(['js/controllers/chart.js','vendor/jquery/hightcharts/highcharts.js','vendor/jquery/datatables/jquery.dataTables.min.js',
                                  'vendor/jquery/datatables/dataTables.bootstrap.js',
                                  'vendor/jquery/datatables/dataTables.bootstrap.css']);
                          }]
                  }
              })
              .state('app.table.online', {
                  url: '/online',
                  templateUrl: 'tpl/table_online.html'
              })

              .state('app.table.recharge', {
                  url: '/recharge',
                  templateUrl: 'tpl/table_recharge.html'
              })
              .state('app.table.regLiving', {
                  url: '/regLiving',
                  templateUrl: 'tpl/table_regLiving.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: 'tpl/table_grid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/grid.js');
                              }
                          );
                      }]
                  }
              })

              // pages

              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })




      }
    ]
  );