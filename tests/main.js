require.config({
        baseUrl: "/SampleSpa/app",
        paths:{
            'angular':"../vendor/angular.min",
            'angularMocks': "../vendor/angular-mocks",
            'jasmine':"../vendor/jasmine",
            'jasmine-html':"../vendor/jasmine-html",
            'boot':"../vendor/boot",
            'tests':"../tests/specs",
            'jQuery':"../vendor/jquery-2.1.1.min"
        },
        shim:{
            'jQuery':{exports:'jQuery'},
            'angular':{ deps:['jQuery'],exports:'angular'},
            'angularMocks':{deps:['angular'], exports:'angular.mock'},
            'jasmine':{exports:'window.jasmineRequire'},
            'jasmine-html':{ deps:['jasmine'],exports:'window.jasmineRequire'},
            'boot':{ deps:['jasmine','jasmine-html'], exports:'window.jasmineRequire'}
        }
    }
);

require(['boot'],function(){
    require(['jQuery','tests/indexCtrlTests','tests/productSvcTests'], function(){
        window.onload();
    });
});