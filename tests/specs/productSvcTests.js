define('tests/productSvcTests', ['angular','angularMocks','services/services', 'services/appConstant', 'services/productSvc'],function(angular, angularMocks){
    describe('Product Service Tests', function(){
            var $httpBackend, prodService;
            beforeEach(angularMocks.module('services',function(ProductsServiceProvider, productServiceUrl) {
                ProductsServiceProvider.setProductServiceUrl(productServiceUrl);
            }));
            beforeEach(angularMocks.inject(
                function($injector){
                    prodService = $injector.get('ProductsService');
                    $httpBackend = $injector.get('$httpBackend');
                    $httpBackend.when('GET','http://localhost:51397/api/BreezeDemoApi/Products').respond([{Id:1,Name:'testName1'},{Id:2,Name:'testName2'}]);
                }
            ));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('Will return products', function(){
                prodService.getProducts(function(data){
                        expect(data.length).toBe(2);
                    },
                    function(data){
                        fail('error while getting products');
                    });
                $httpBackend.flush();
            });
        }
    );
});
