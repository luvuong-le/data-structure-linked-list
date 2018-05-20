"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, nextNode, prevNode) {
        this.value = value;
        this.next = nextNode || null;
        this.prev = prevNode || null;
    }
    return Node;
}());
exports.Node = Node;
