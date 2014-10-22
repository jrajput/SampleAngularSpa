define('services/productSvc',['angular','services/services', 'services/appConstant'],function(){
    angular.module('services').provider('ProductsService',function(){
        var productServiceUrl;
        this.setProductServiceUrl = function(url){
            productServiceUrl = url;
        };
        this.$get = ['$http',function($http){
            var returnObj = {};
            returnObj.getProducts = function(successCallBack,failCallBack){
                $http.get(productServiceUrl).success(successCallBack).error(failCallBack);
            };
            return returnObj;
        }];
    });
});