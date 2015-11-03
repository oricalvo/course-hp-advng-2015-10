(function () {

    var app = angular.module("MyApp", []).config(function ($locationProvider) {
        $locationProvider.html5Mode(true);

        //window.$locationProvider = $locationProvider;
    }).run(function ($location) {
        //$location.html5Mode(true);
    });
})();
