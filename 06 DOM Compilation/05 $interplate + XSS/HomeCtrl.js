(function () {

    function HomeCtrl($scope, $element, $interpolate) {
        var fn = $interpolate("{{email}}", undefined, "html");
        var res = fn({
            email: "<script>alert('XSS');</script>"
        });

        $element.append(res);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
