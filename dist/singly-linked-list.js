"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var SLL = /** @class */ (function () {
    function SLL() {
        this.head = null;
        this.length = 0;
    }
    SLL.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };
    SLL.prototype.getSize = function () {
        return this.length;
    };
    /**
     * @function [contains]
     * @argument value
     * @description Check if linked list contains a value
     * @returns boolean
     */
    SLL.prototype.contains = function (value) {
        var current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    };
    /**
     * @function [prepend]
     * @argument number
     * @description: Append a new node to beginning of list
     */
    SLL.prototype.prepend = function (value) {
        var node = new Node_1.Node(value, this.head);
        this.head = node;
        this.length++;
    };
    /**
     *  @function createNode
     *  @description: Create node and append to end of list
     **/
    SLL.prototype.append = function (value) {
        // Create a new node
        var node = new Node_1.Node(value);
        if (this.head === null) {
            this.head = node;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    };
    /**
     *  @function [remove]
     *  @argument number
     *  @description: Remove a node with a specific number
     **/
    SLL.prototype.remove = function (value) {
        var current = this.head;
        var prevNode;
        if (this.contains(value)) {
            while (current !== null) {
                if (current.value === value) {
                    prevNode.next = current.next;
                    current.next = null;
                    this.length--;
                }
                prevNode = current;
                current = current.next;
            }
            return true;
        }
        return false;
    };
    /**
     *  @function [removeAtPosition]
     *  @argument positionIndex
     *  @description: Remove a node at a specific index
     **/
    SLL.prototype.removeAtPosition = function (pos) {
        if (pos <= this.getSize() && pos !== 0) {
            var current = this.head;
            var currentIndex = 1;
            var prev = void 0;
            if (pos !== 1) {
                while (currentIndex++ !== pos) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
                current.next = null;
                this.length--;
                return true;
            }
            // Remove the current head and set the new head to be the next value of the deleted head
            prev = current.next;
            current = null;
            this.head = prev;
            this.length--;
            return true;
        }
        console.error("\n[ERROR][CODE=REMOVAL]: No node at that position\n");
        return false;
    };
    /**
     *  @function [getAtPosition]
     *  @argument positionIndex
     *  @description: Get the value of a node at a specific index
     **/
    SLL.prototype.getAtPosition = function (pos) {
        if (pos <= this.getSize()) {
            var current = this.head;
            var currentIndex = 1;
            while (currentIndex++ !== pos) {
                current = current.next;
            }
            console.log("Position at: " + pos + " is " + current.value);
            return true;
        }
        return false;
    };
    SLL.prototype.print = function () {
        console.log("Printing Linked List");
        var current = this.head;
        while (current !== null) {
            if (current.next === null) {
                process.stdout.write("[" + current.value + "]\n");
            }
            else {
                process.stdout.write("[" + current.value + "] => ");
            }
            current = current.next;
        }
    };
    return SLL;
}());
var linkedlist = new SLL();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.prepend(5);
linkedlist.remove(1);
linkedlist.print();
linkedlist.removeAtPosition(1);
linkedlist.removeAtPosition(2);
linkedlist.print();
