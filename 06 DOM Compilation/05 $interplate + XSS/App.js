(function () {

    var app = angular.module("MyApp", ["ngSanitize"]).run(function ($compile, $rootScope, $parse) {

        var parseFn = $parse("a + b");

        var res = parseFn({
            a: 2,
            b: 3,
        }, { b: 5 });

        console.log(res);

    });

})();
