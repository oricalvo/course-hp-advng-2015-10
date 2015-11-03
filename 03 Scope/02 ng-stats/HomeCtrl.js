(function () {

    function HomeCtrl($scope, $element) {
        showAngularStats({ position: "bottomleft" });

        $scope.message = "Hello Angular";

        $scope.changeDOM = function () {
            $element.append("<span>{{message}}</span>");
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.changeDOM();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
