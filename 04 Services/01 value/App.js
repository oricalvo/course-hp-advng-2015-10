(function () {

    var app = angular.module("MyApp", []);

    app.value("logger", {
        debug: function (message) {
            console.log(message);
        },
        warning: function () {
        }
    });

    function HttpService($http, $q) {
    }

    HttpService.prototype.GET = function () {
    }

    HttpService.prototype.POST = function () {
    }

    app.factory("httpaService", function ($http, $q) {
        return new HttpService($http, $q);
    });

    app.service("logger", HttpService);

    app.service("logger", function () {
        this.debug = function () {
        }

        this.warning = function () {
        }
    });
})();
