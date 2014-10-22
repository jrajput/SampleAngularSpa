define('tests/indexCtrlTests', ['angular', 'angularMocks','controllers/controllers', 'controllers/indexCtrl'],function(angular, angularMocks){
    describe('Index Controller Tests', function(){
        var createIndexCtrl,$rootScope;
        beforeEach(angularMocks.module('controllers'));
        beforeEach(angularMocks.inject(
            function($injector){
                var controller = $injector.get('$controller');
                $rootScope = $injector.get('$rootScope');

                createIndexCtrl = function(){
                    return controller('IndexController',{'$scope':$rootScope, 'ProductsService' : {getProducts:function(successCallBack,failCallBack){
                        successCallBack([{Id:1,Name:'testName1'},{Id:2,Name:'testName2'}]);
                    }}, 'appMasking' : {showMask:angular.noop, hideMask:angular.noop}});
                };
            }
        ));

        it('Will set products in scope', function(){
            createIndexCtrl();
            expect($rootScope.products.length).toBe(2);
        });
    });
});