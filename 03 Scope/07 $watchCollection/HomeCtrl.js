(function () {

    function HomeCtrl($scope, $element) {
        $scope.numbers = [{ value: 1 }, { value: 2 }];

        $scope.$watchCollection("numbers", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGED");
        });

        $scope.run = function () {
            //$scope.numbers.push(1);

            $scope.numbers[0].value += 5;
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
