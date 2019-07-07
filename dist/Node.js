"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, nextNode, prevNode) {
        this.value = value;
        this.next = nextNode || null;
        this.prev = prevNode || null;
    }
    Node.prototype.setPrevious = function (node) {
        this.prev = node;
    };
    Node.prototype.setNext = function (node) {
        this.next = node;
    };
    return Node;
}());
exports.Node = Node;
