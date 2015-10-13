var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Helpers_1 = require("./Helpers");
/// <reference path="scripts/typings/jquery/jquery.d.ts" />
var Point2 = (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point2;
})();
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx() {
        _super.call(this, 10, 20);
        Helpers_1.doSomething();
    }
    PointEx.prototype.delayMove = function () {
        var _this = this;
        setTimeout(function () {
            _this.x += 10;
            _this.y += 10;
        }, 1000);
    };
    return PointEx;
})(Point2);
var pt = new PointEx();
//# sourceMappingURL=Point.js.map