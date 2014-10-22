define("app",['angular','controllers/controllers','services/services','directives/directives'], function(angular){
    'use strict';
    angular.module('SampleSpaApp',['controllers','services','directives','ngRoute']).config(
        ['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/OrderDetail/Product/:productId', {
                        templateUrl: '/SampleSpa/templates/OrderDetails.html',
                        controller: 'orderDetailsCtrl'
                    });

                $locationProvider.html5Mode(true);
            }]
    );
});