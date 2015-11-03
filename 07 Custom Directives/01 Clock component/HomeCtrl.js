(function () {

    function HomeCtrl($scope, $timeout) {
        var me = this;

        me.format = "ss";

        //$scope.$on("clockReady", function (e, args) {
        //    if (args.clock == me.clock1) {
        //        me.clock1.start();
        //    }
        //});

        $timeout(function () {
            me.clock1.start();
            me.clock2.start();
        }, 0);

        //$scope.$evalAsync(function () {
        //    me.clock1.start();
        //});
    }

    HomeCtrl.prototype.change = function () {
        this.time = "ABC";
    }

    HomeCtrl.prototype.onTick = function (time) {
        console.log("Tick: " + time);
    }

    HomeCtrl.prototype.stop = function (clock) {
        clock.stop();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
