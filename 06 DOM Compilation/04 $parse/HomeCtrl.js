(function () {

    function HomeCtrl($scope, $compile, $rootScope) {
        $scope.message = "Hello Angular";

        //$scope.$eval("a+b", { a: 10 });

        //$scope.$watch("a+b",

        $scope.run = function () {
            var template = "<span>{{data}}</span>";
            var $template = angular.element(template);

            //var linkFn = $compile("<span>{{data}}</span>");
            var linkFn = $compile($template);
            for (var i = 0; i < 2; i++) {

                var scope = $rootScope.$new();
                scope.data = "Hello $compile " + (i+1);

                var $template = linkFn(scope, function (clone) { });

                $("body").append($template);
            }

            //scope.$apply();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
