
//(function () {

//    function StatusBarService() {
//        return {
//            message: function (str) {
//            }
//        };
//    }

//    angular.module("MyApp").service("statusBarService", StatusBarService);
//})();

(function () {

    function StatusBarCtrl($scope, di) {
        di.value("statusBarService", this);

        this.message = function (str) {
            $scope.message = str;
        }
    }

    angular.module("MyApp").controller("StatusBarCtrl", StatusBarCtrl);

})();

