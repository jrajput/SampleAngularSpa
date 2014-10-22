require.config({
        baseUrl: "../app",
        paths:{
            angular:"../vendor/angular.min",
            angularRoute: "../vendor/angular-route.min",
            jQuery:"../vendor/jquery-2.1.1.min"
        },
        shim:{
            jQuery:{exports:'jQuery'},
            angular:{
                deps:['jQuery'],
                exports:'angular'
            },
            angularRoute:{deps:['angular']}

        }
    }
);

require(['angular','angularRoute','jQuery','services/appConstant', 'services/productSvc'],function(angular){
    angular.module('services').config(['productServiceUrl','ProductsServiceProvider',function(productServiceUrl,ProductsServiceProvider){
        ProductsServiceProvider.setProductServiceUrl(productServiceUrl);
    }]);
    require(['bootstrap']);
});