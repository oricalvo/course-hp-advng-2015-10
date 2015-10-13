(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function doSomething() {
    console.log("doSomething");
}
exports.doSomething = doSomething;
function run() {
}

},{}],2:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Helpers_1 = require("./Helpers");
/// <reference path="scripts/typings/jquery/jquery.d.ts" />
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
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
})(Point);
var pt = new PointEx();

},{"./Helpers":1}]},{},[2]);
