(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.localData = "Local";

        $scope.run = function () {
            $scope.localData = "X";
            $rootScope.globalData = "Y";

            $scope.partialApply();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
