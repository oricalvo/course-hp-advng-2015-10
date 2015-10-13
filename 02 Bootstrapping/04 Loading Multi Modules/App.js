(function () {

    angular.module("MyApp", ["MyLib"]).config(function () {
        console.log("MyApp.config");
    }).run(function () {
        console.log("MyApp.run");
    });

    angular.module("MyLib", []).config(function () {
        console.log("MyLib.config");
    }).run(function () {
        console.log("MyLib.run");
    });

    angular.module("MyLib").provider("MyProvider", function () {
        console.log("MyLib.MyProvider");

        this.$get = function () {
            return {
            };
        }
    });

})();
