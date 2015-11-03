(function () {

    angular.module("MyApp").directive("datepicker", function () {
        var ddo = {
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) {
                    return;
                }

                if (attrs.max) {
                    ngModel.$validators.max = function (modelValue) {
                        if (!modelValue) {
                            return true;
                        }

                        var maxDate = moment(attrs.max, "M/D/Y", true);
                        var valid = (maxDate - modelValue) > 0;
                        return valid;
                    }
                }

                ngModel.$formatters.push(function (modelValue) {
                    if (!modelValue) {
                        return "";
                    }

                    return moment(modelValue).format("M/D/YYYY");
                });

                ngModel.$parsers.push(function (viewValue) {
                    var date = moment(viewValue, "M/D/YYYY", true);
                    if (!date.isValid()) {
                        return undefined;
                    }

                    return date.toDate();
                });

                element.datepicker();
            },
            require: "?ngModel",
        };

        return ddo;
    });

})();

