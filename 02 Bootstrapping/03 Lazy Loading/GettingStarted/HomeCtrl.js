define(["myApp"], function (myApp) {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.load = function () {
            require(["SecondCtrl"], function () {
                console.log("LOADED");

                $scope.isLoaded = true;

                $scope.$apply();
            });
        }
    }

    myApp.controller("HomeCtrl", HomeCtrl);

});

