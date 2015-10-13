define(["angular", "jquery"], function () {
    var providerInjector;

    var myApp = angular.module("myApp", []).config(function ($controllerProvider, $injector) {
        myApp.$controllerProvider = $controllerProvider;

        providerInjector = $injector;

    }).run(function ($injector) {
        console.log($injector == providerInjector);
    });

    return myApp;
})

