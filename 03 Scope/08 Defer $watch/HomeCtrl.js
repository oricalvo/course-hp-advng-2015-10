(function () {

    function HomeCtrl($scope, $element) {
        $scope.numbers = [{ value: 1 }, { value: 2 }];

        $scope.message = "Hello";

        $scope.num1 = 0;
        $scope.num2 = 0;
        $scope.changes = 0;

        $scope.$watch("num1", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            ++$scope.changes;

            $scope.$evalAsync(function () {
                console.log("Number of changes: " + $scope.changes);
            });
        });

        $scope.$watch("num2", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            ++$scope.changes;
        });

        $scope.run = function () {
            $scope.num1++;
            $scope.num2++;

            setTimeout(function () {
                $scope.message += "X";

            }, 0);

            if (!$rootScope.$$phase) {
                $scope.$apply();
            }

            this.inputFile.trigger("click");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
