(function () {

    var app = angular.module("MyApp", []).run(function ($compile, $rootScope) {
    });

    app.directive("mydir", function () {

        console.log("mydir ctor");

        var ddo = {
            restrict: "E",
            //template: "<h1>Hello Directive</h1>",
            //replace: true,
            compile: function (element, attrs) {

                element.remove();

                return function link(scope, element, attrs) {

                };
            },
            scope: {

            //}
            //link: function (scope, element, attrs) {
            //}
        };

        return ddo;
    });

})();
