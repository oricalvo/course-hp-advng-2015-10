(function () {

    function HomeCtrl($scope, $element) {
        $scope.message = "Hello Angular";

        //$element.find("input.birthday").datepicker();

        $scope.dump = function () {
            console.log($scope.birthday);
        }

        $scope.change = function () {
            $scope.birthday = new Date(2030, 1, 0);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
