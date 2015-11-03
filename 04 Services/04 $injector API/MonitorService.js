
(function () {

    function MonitorService($injector, $timeout) {

        var callbacks = [];

        $timeout(function () {
            service.raise();
        }, 1000);

        var service = {
            register: function (callback) {
                callbacks.push(callback);
            },
            raise: function () {
                callbacks.forEach(function (callback) {
                    $injector.invoke(callback);
                });
            }
        }

        return service;
    }

    angular.module("MyApp").service("monitorService", MonitorService);
})();
