define('services/appMasking',['angular','services/services'],function(){
    angular.module('services').factory('appMasking',function(){
        var retObj={};
        retObj.showMask= function($elementToMask){
            var offset = $elementToMask.offset();
            var width = $elementToMask.outerWidth() + 1;
            var height = $elementToMask.outerHeight() + 1;
            var loadingHtml = $( '<div>' )
                .addClass( 'loading' );
            var screenHtml = $( '<div>' )
                .addClass( 'appMask' )
                .offset( offset )
                .width( width )
                .height( height );
            screenHtml.append( loadingHtml );
            $elementToMask.append( screenHtml );
        };
        retObj.hideMask= function($elementToUnMask){
            $elementToUnMask.find( '.appMask' )[0].remove();
        };
        return retObj;
    });
});