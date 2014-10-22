define('controllers/orderDetailsCtrl',['angular','controllers/controllers','services/appMasking', 'services/appConstant'],function(){
    angular.module('controllers').controller('orderDetailsCtrl', ['$scope','appMasking', '$http','$location','$routeParams','orderServiceUrl',
        function($scope,appMasking, $http,$location,$routeParams, orderServiceUrl){
        var mainDiv = $('.mainDiv');
        appMasking.showMask(mainDiv);
        $http.get(orderServiceUrl).success(function(data){
            $scope.orderDetails = data;
            appMasking.hideMask(mainDiv);
        }).error(function(error){
            appMasking.hideMask(mainDiv);
            alert(error);
        });
    }]);
});