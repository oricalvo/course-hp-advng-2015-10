(function () {

    var app = angular.module("MyApp", []).run(function ($compile, $rootScope) {
    });

    app.directive("parent", function () {

        var ddo = {
            controller: function () {
                console.log("parent.controller");
            },
            compile: function (element, attrs) {
                console.log("parent.compile");

                return {
                    pre: function () {
                        console.log("parent.pre");
                    },
                    post: function () {
                        console.log("parent.post");
                    }
                };
            },
        };

        return ddo;
    });

    app.directive("child", function () {

        var ddo = {
            controller: function () {
                console.log("child.controller");
            },
            compile: function (element, attrs) {
                console.log("child.compile");

                return {
                    pre: function () {
                        console.log("child.pre");
                    },
                    post: function () {
                        console.log("child.post");
                    }
                };
            },
        };

        return ddo;
    });
})();
