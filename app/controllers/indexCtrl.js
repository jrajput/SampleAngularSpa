define('controllers/indexCtrl',['angular','controllers/controllers','services/productSvc','services/appMasking','directives/productRow','directives/productPrice'],function(){
    angular.module('controllers').controller('IndexController', ['$scope','ProductsService','appMasking', function($scope,productsService, appMasking){
        var mainDiv = $('.mainDiv');
        appMasking.showMask(mainDiv);
        productsService.getProducts(function(data){
                $scope.products=data;
                appMasking.hideMask(mainDiv);
            },
            function(data){
                appMasking.hideMask(mainDiv);
                alert(data);
            });
    }]);
});
