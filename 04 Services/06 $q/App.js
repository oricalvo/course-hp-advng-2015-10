(function () {

    angular.module("MyApp", []).config(function ($provide) {
        $provide.value("di", $provide);
    });
})();
