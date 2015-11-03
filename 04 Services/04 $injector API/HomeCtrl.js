(function () {

    function HomeCtrl($scope, $location, monitorService, $injector) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            $location.url("about?version=1.0.0.0");
        }

        //handler.$inject = ["$q"];

        //handler.$inject.forEach(function (dep) {
        //    var service = $injector.$get(dep);
        //});

        function handler(_$q_) {

            console.log(!!_$q_);
        }

        monitorService.register(handler);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
