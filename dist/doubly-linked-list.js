"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var util = require('util');
var DLL = /** @class */ (function () {
    function DLL() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DLL.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };
    DLL.prototype.getSize = function () {
        return this.length;
    };
    /**
     * @function [contains]
     * @argument value
     * @description Check if doubly linked list contains a value
     * @returns boolean
     */
    DLL.prototype.contains = function (value) {
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
     * @description: Append a new node to beginning of list
     */
    DLL.prototype.prepend = function (value) {
        var node = new Node_1.Node(value, this.head);
        if (this.head !== null) {
            // Set the previous of the current head to the new node
            this.head.prev = node;
            // Set the head equal to the new node
            this.head = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    };
    /**
     *  @function [append]
     *  @description: Create node and append to end of list
     **/
    DLL.prototype.append = function (value) {
        var node = new Node_1.Node(value);
        if (this.tail !== null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head === null) {
            this.head = node;
        }
        this.length++;
    };
    /**
     *  @function [remove]
     *  @argument number
     *  @description: Remove a node with a specific number
     **/
    DLL.prototype.remove = function (value) {
        var current = this.head;
        var prev;
        if (this.contains(value)) {
            if (current.value === value) {
                prev = current.next;
                current = null;
                this.head = prev;
                this.head.prev = null;
                this.length--;
                return true;
            }
            else {
                while (current !== null) {
                    if (current.value === value) {
                        if (current.next !== null) {
                            prev.next = current.next;
                            current.next.prev = prev;
                            current.next = null;
                            this.length--;
                        }
                        else {
                            prev.next = null;
                            current.next = null;
                            this.tail = prev;
                            this.length--;
                        }
                    }
                    prev = current;
                    current = current.next;
                }
                return true;
            }
        }
        return false;
    };
    /**
     *  @function [removeAtPosition]
     *  @argument positionIndex
     *  @description: Remove a node at a specific index
     **/
    DLL.prototype.removeAtPosition = function (pos) {
        if (pos <= this.getSize() && pos > 0) {
            var current = this.head;
            var currentIndex = 1;
            var prev = void 0;
            if (pos === 1) {
                prev = current.next;
                current = null;
                this.head = prev;
                this.head.prev = null;
                this.length--;
                return true;
            }
            else {
                while (currentIndex <= pos) {
                    if (currentIndex === this.getSize()) {
                        prev.next = null;
                        this.tail = prev;
                        current = null;
                        this.length--;
                        return true;
                    }
                    if (currentIndex === pos) {
                        prev.next = current.next;
                        current.next.prev = prev;
                        current = null;
                        this.length--;
                        return true;
                    }
                    prev = current;
                    current = current.next;
                    currentIndex++;
                }
            }
        }
        console.error("\n[ERROR][CODE=REMOVAL]: No node at that position\n");
        return false;
    };
    /**
     *  @function [getAtPosition]
     *  @argument positionIndex
     *  @description: Get the value of a node at a specific index
     **/
    DLL.prototype.getAtPosition = function (pos) {
        var current = this.head;
        var currentIndex = 1;
        if (pos <= this.getSize() && pos !== 0) {
            while (currentIndex++ !== pos) {
                current = current.next;
            }
            console.log("Value at position: " + pos + " is " + current.value);
            return current.value;
        }
        console.error("\n[ERROR][CODE=GET]: No node at that position\n");
        return false;
    };
    DLL.prototype.print = function () {
        //console.log(util.inspect(this, false, null));
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
    return DLL;
}());
var linkedlist = new DLL();
linkedlist.prepend(5);
linkedlist.prepend(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.print();
// linkedlist.remove(10);
// linkedlist.remove(40);
// linkedlist.removeAtPosition(2);
linkedlist.getAtPosition(5);
linkedlist.print();
