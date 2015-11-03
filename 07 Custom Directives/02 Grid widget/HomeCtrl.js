(function () {

    function HomeCtrl($scope) {
        $scope.ID = "Id";

        $scope.Name = "NAME";

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.change = function () {
            $scope.contacts.push({
                id: 3, name: "Udi"
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
