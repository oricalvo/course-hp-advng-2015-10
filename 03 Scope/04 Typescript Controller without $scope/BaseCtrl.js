var BaseCtrl = (function () {
    function BaseCtrl() {
    }
    BaseCtrl.prototype.showSiteMessage = function (message) {
        alert(message);
    };
    Object.defineProperty(BaseCtrl.prototype, "$location", {
        get: function () {
            if (!this.cachedLocation) {
                this.cachedLocation = $("html").injector().get("$location");
            }
            return this.cachedLocation;
        },
        enumerable: true,
        configurable: true
    });
    return BaseCtrl;
})();
//# sourceMappingURL=BaseCtrl.js.map