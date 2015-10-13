import {doSomething} from "./Helpers";

/// <reference path="scripts/typings/jquery/jquery.d.ts" />

declare var myLib;
myLib.run();

class Point2 {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        await run();

        g();
    }
}

class PointEx extends Point2 {
    constructor() {
        super(10, 20);

        doSomething();
    }

    delayMove() {
        setTimeout(() => {
            this.x += 10;
            this.y += 10;
        }, 1000);
    }
}

var pt = new PointEx();
