(function () {

    angular.module("MyApp").directive("grid", function ($interpolate, $compile) {
        var ddo = {
            compile: function (element, attrs) {
                var columns = [];
                var headTr = null;
                var tbody = null;

                element.find("column").each(function () {
                    var $column = $(this);

                    var column = {
                    };

                    column.titleFn = $interpolate($column.attr("title"));

                    column.templateFn = $compile($column.contents());

                    columns.push(column);
                });

                element.empty();

                element.append("<table><thead><tr></tr></thead><tbody></tbody></table>");
                headTr = element.find("tr");
                tbody = element.find("tbody");
                columns.forEach(function (column) {
                    var td = $("<td />");
                    headTr.append(td);
                });

                return function postLink(scope, element, attrs) {

                    var tds = headTr.find("td");
                    columns.forEach(function (column, index) {
                        var td = $(tds[index]);
                        
                        var title = column.titleFn(scope.$parent);
                        td.text(title);
                    });

                    scope.$watchCollection("gridModel", function (model) {
                        tbody.empty();

                        if (!model) {
                            return;
                        }

                        model.forEach(function (dataItem) {
                            var tr = $("<tr />");
                            tbody.append(tr);

                            var rowScope = scope.$parent.$new();
                            rowScope[attrs.gridModelItem] = dataItem;

                            columns.forEach(function (column, index) {
                                var td = $("<td/>");
                                tr.append(td);

                                var template = column.templateFn(rowScope, function (clone) { });
                                td.append(template);
                            });
                        });
                    });
                }
            },
            scope: {
                gridModel: "=",
            },
            terminal: true,
        };

        return ddo;
    });

})();
