(function () {

    var app = angular.module("MyApp", []).run(function ($compile, $rootScope) {
    });

    app.directive("mydir", function () {

        console.log("mydir ctor");

        var ddo = {
            restrict: "A",
            compile: function (element, attrs) {

                return function link(scope, element, attrs) {

                };
            },
            scope: {

            }
            //link: function (scope, element, attrs) {
            //}
        };

        return ddo;
    });

})();
