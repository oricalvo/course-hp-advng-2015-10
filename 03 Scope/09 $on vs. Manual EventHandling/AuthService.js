(function () {

    function AuthService($rootScope) {
        //this.loggedOut = $.Callbacks();
        this.$rootScope = $rootScope;
    }

    AuthService.prototype.logout = function () {
        //this.loggedOut.fire();

        this.$rootScope.$emit("loggedOut");
    }

    angular.module("MyApp").service("authService", AuthService);

})();
