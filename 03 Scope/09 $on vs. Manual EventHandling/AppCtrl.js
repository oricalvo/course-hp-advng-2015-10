(function () {

    function AppCtrl($scope) {
        $scope.showHome = true;

        $scope.toggleHome = function () {
            $scope.showHome = !$scope.showHome;
        }
    }

    angular.module("MyApp").controller("AppCtrl", AppCtrl);
})();
