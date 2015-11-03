(function () {

    var app = angular.module("MyApp", []).config(function (loggerProvider, $injector, myServiceProvider) {

        //myServiceProvider.$get

        loggerProvider.configure({
        });
    }).run(function ($injector) {
    });

    app.factory("myService", function () {
        return {
        };
    });

    app.provider("logger", function () {
        var config;

        this.$get = function () {
            var service = {
                debug: function (message) {
                    console.log(!!config + " " + message);
                }
            };

            return service;
        }

        this.configure = function (_config) {
            config = _config;
        }
    });

    //app.provider("logger", {
    //    $get: function () {
    //        var provider = this;

    //        var service = {
    //            debug: function (message) {
    //                console.log(!!provider.config + " " + message);
    //            }
    //        };

    //        return service;
    //    },
    //    configure: function (config) {
    //        this.config = config;
    //    }
    //});
})();
