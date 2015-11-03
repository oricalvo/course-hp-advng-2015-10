(function () {

    function HomeCtrl($scope, $element) {
        $scope.$watch("name", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            $scope.message = $scope.name.length;
        });

        //$scope.onNameChanged = function () {
        //    $scope.message = $scope.name.length;
        //}
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
