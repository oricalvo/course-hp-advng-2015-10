
(function () {

    function ContactService($q, $http) {
        return {
            getAll: function () {

                return $http.get("/contacts.html").then(function (res) {
                    //throw new Error("Oops");

                    return $q.reject(new Error("Oops"));

                    return res.data;
                });

                //var deferred = $q.defer();

                //$http.get("/contacts.html").then(function (res) {
                //    deferred.resolve(res.data);
                //});

                //return deferred.promise;

                //return $q.when([
                //    { id: 1, name: "Ori" },
                //    { id: 2, name: "Roni" },
                //]);
            },
            //getAllSync: function () {
            //    return [
            //        { id: 1, name: "Ori" },
            //        { id: 2, name: "Roni" },
            //    ];
            //}
        };
    }

    angular.module("MyApp").factory("contactService", ContactService);
})();
