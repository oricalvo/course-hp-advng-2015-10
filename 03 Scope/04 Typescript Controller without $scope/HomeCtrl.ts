declare var angular;

class HomeCtrl extends BaseCtrl {
    public message: string;
    public contacts: Contact[];

    constructor() {
        super();

        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    sayHello() {
        this.showSiteMessage("Hello BaseCtrl");
    }

    gotoAbout() {
        this.$location.url("/about");
    }
}

interface Contact {
    id: number;
    name: string;
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
