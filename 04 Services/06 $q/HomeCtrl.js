(function () {

    function HomeCtrl($scope, $location, contactService) {

        //console.log("Before");
        //$scope.contacts = contactService.getAllSync();
        //console.log("Done");
        //console.log("After");

        $scope.reload = function () {
            console.log("Before");
            contactService.getAll().then(function (contacts) {
                $scope.contacts = contacts;
                //throw new Error("Ooops2");
                console.log("Done");
            }).catch( function () {
                console.log("Error");
            });

            console.log("After");
        }

        $scope.reload();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
