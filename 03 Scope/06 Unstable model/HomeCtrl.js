(function () {

    function HomeCtrl($scope, $element) {
        $scope.$watch("name", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            if ($scope.name.length < 9) {
                $scope.name += "X";
            }

            //$scope.message = $scope.name.length;
        });

        $scope.$watch(function () {
            console.log("ITERATION");
        });

        //$scope.onNameChanged = function () {
        //    $scope.message = $scope.name.length;
        //}
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
