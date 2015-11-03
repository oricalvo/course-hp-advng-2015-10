(function () {

    angular.module("MyApp", []).run(function ($rootScope, $exceptionHandler) {
        $rootScope.globalData = "Global";

        $rootScope.partialApply = function () {
            angular.scopeForApply = this;
        }

        function beginPhase(phase) {
            if ($rootScope.$$phase) {
                throw $rootScopeMinErr('inprog', '{0} already in progress', $rootScope.$$phase);
            }

            $rootScope.$$phase = phase;
        }

        function clearPhase() {
            $rootScope.$$phase = null;
        }

        var originalApply = $rootScope.$apply;
        $rootScope.$apply = function (expr) {
            try {
                beginPhase('$apply');
                return this.$eval(expr);
            } catch (e) {
                $exceptionHandler(e);
            } finally {
                clearPhase();
                try {
                    if (angular.scopeForApply) {
                        angular.scopeForApply.$digest();

                        angular.scopeForApply = null;
                    }
                    else {
                        $rootScope.$digest();
                    }
                } catch (e) {
                    $exceptionHandler(e);
                    throw e;
                }
            }
        }
    });

})();
