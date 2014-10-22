define('directives/productPrice',['angular','directives/directives'],function(angular){
    angular.module('directives').directive('productPrice',function(){
        return{
            restrict:'C',
            template:'<td ng-bind="rowPrice"></td>',
            scope:{rowPrice:'=price'},
            replace:true
        };
    });
});