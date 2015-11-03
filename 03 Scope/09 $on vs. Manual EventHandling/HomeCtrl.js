(function () {

    function HomeCtrl($scope, $rootScope, authService) {
        console.log("HomeCtrl.ctor");

        $scope.status = "Logged In";

        $scope.logout = function () {
            authService.logout();
        }

        var off = $rootScope.$on("loggedOut", function () {
            $scope.status = "Logged Out"

            console.log("HomeCtrl.onLoggedOut");
        });

        $scope.$on("$destroy", function () {
            off();

            //authService.loggedOut.remove();
        });

        //authService.loggedOut.add(function () {
        //    $scope.status = "Logged Out";

        //    console.log("HomeCtrl.onLoggedOut");
        //});
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
