declare var $;

class BaseCtrl {
    private cachedLocation;

    showSiteMessage(message: string) {
        alert(message);
    }

    get $location() {
        if (!this.cachedLocation) {
            this.cachedLocation = $("html").injector().get("$location");
        }

        return this.cachedLocation;
    }
}
 