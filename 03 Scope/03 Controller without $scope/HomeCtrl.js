(function () {

    function HomeCtrl() {
        //showAngularStats({ position: "bottomleft" });

        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    HomeCtrl.prototype.sayHello = function () {
        alert("Hello " + this.message);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
