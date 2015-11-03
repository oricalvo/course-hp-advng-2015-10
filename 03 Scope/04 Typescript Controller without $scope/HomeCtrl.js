var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HomeCtrl = (function (_super) {
    __extends(HomeCtrl, _super);
    function HomeCtrl() {
        _super.call(this);
        this.message = "Hello Angular";
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    HomeCtrl.prototype.sayHello = function () {
        this.showSiteMessage("Hello BaseCtrl");
    };
    HomeCtrl.prototype.gotoAbout = function () {
        this.$location.url("/about");
    };
    return HomeCtrl;
})(BaseCtrl);
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map