(function () {

    function HomeCtrl($scope, $location, logger) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            $location.url("about?version=1.0.0.0");
        }

        logger.debug("Hello");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
