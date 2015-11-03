(function () {

    angular.module("MyApp", []).run(function ($rootScope) {
        var originalApply = $rootScope.$apply;
        $rootScope.$apply = function () {
            console.log("CYCLE");

            originalApply.apply(this, arguments);
        }
    });

})();
