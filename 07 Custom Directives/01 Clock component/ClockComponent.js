(function () {

    function ClockController($scope, $interval, $timeout, $attrs, $parse) {
        var me = this;

        me.intervalId = null;
        me.time = new Date();
        me.$interval = $interval;

        if ($attrs.name) {
            var parseFn = $parse($attrs.name);
            if (!parseFn.assign) {
                throw new Error("clock.name is not assignable: " + $attrs.name);
            }

            parseFn.assign($scope.$parent, this);

            $scope.$emit("clockReady", { clock: me });
        }
    }

    ClockController.prototype.start = function () {
        var me = this;

        if (me.intervalId) {
            return;
        }

        me.intervalId = me.$interval(function () {
            me.time = new Date();

            me.ontick({ time: me.time });

        }, 1000);
    }

    ClockController.prototype.stop = function () {
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            templateUrl: "/Clock.html",
            controller: ClockController,
            controllerAs: "ctrl",
            scope: {
                format: "=",
                ontick: "&",
            },
            bindToController: true,
        };

        return ddo;
    });

})();
