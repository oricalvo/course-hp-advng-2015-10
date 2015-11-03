(function () {

    function HomeCtrl($scope, $element) {
        $scope.message = "Hello Angular";

        $scope.changeDOM = function () {
            $element.append("<span>{{message}}</span>");
        }

        $scope.changeDOM();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
