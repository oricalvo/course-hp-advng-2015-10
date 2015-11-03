(function () {

    function HomeCtrl($scope, logger) {
        $scope.message = "Hello Angular";

        //logger.debug("Hello");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
