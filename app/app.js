'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.tumblerController',
  'myApp.tumblerController2'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');
  // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  $routeProvider.otherwise({redirectTo: '/tumblerController'});
}]);

