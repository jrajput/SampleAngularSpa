define('directives/productRow',['angular','directives/directives', 'services/appConstant'],function(angular){
    angular.module('directives').directive('productRow',['$http','$location','orderServiceUrl', function($http,$location,orderServiceUrl){
        return{
            restrict:'C',
            templateUrl:'/SampleSpa/templates/RowTemplate.html',
            scope:{row:'=rowItem'},
            replace:true,
            link:function(scope,element,attrs){
                scope.getOrderDetails=function(){
                   var productId = scope.row.Id;
                   $location.url('/OrderDetail/Product/'+ productId);
                };
            }
        };
    }]);
});