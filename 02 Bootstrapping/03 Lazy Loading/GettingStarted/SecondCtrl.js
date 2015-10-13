define(["myApp"], function (myApp) {

    function SecondCtrl($scope) {

        $scope.sayHello = function () {
            alert("Hello Lazy Controller");
        }
    }

    //angular.module("myApp").controller("SecondCtrl", SecondCtrl);

    myApp.$controllerProvider.register("SecondCtrl", SecondCtrl);

});

