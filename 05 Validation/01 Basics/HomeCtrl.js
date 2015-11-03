(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {
            $scope.form.userName.$setValidity("userNameEqualsPassword", $scope.userName != $scope.password);

            if (!$scope.form.$valid) {
                return;
            }

            console.log("Saving");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
