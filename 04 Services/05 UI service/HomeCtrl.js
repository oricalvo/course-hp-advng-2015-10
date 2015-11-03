(function () {

    function HomeCtrl($scope, $location, statusBarService) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            statusBarService.message("Loading ...");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
