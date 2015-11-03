(function () {

    function HomeCtrl($scope, $location) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            $location.url("about?version=1.0.0.0");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
