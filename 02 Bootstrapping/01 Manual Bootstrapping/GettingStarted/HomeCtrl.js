(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);

})();
