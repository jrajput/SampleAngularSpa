define('services/appConstant',['angular','services/services'],function(){
    angular.module('services').constant('productServiceUrl','http://localhost:51397/api/BreezeDemoApi/Products');
    angular.module('services').constant('orderServiceUrl', 'http://localhost:51397/api/BreezeDemoApi/OrderDetails');
});