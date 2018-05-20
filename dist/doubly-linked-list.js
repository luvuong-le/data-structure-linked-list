"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var util = require('util');
var chalk = require("chalk");
var DLL = /** @class */ (function () {
    function DLL() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * @function [isEmpty]
     * @description Check if linked list length is 0 or not
     * @returns boolean
     */
    DLL.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };
    /**
     * @function [getSize]
     * @description Return the size of the list
     * @returns number
     */
    DLL.prototype.getSize = function () {
        return this.length;
    };
    DLL.prototype.log = function (message, color) {
        console.log(color(message));
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
        var node = new Node_1.Node(value, this.head, null);
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
        this.log("\n[SUCCESS] Node with value [" + value + "] prepended successfully", chalk.green);
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
        else {
            var current = this.head;
            var prev = void 0;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            node.prev = prev;
        }
        this.log("\n[SUCCESS] Node with value [" + value + "] appended successfully", chalk.green);
        this.length++;
    };
    /**
     *  @function [removeFirst]
     *  @description: Remove the current node and set to the nextNode                   in the list
     *  @return boolean
     **/
    DLL.prototype.removeFirst = function () {
        if (this.getSize() > 0) {
            if (this.getSize() === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                var current = this.head;
                var nextNode = current.next;
                current.next.prev = null;
                current = null;
                this.head = nextNode;
            }
            this.length--;
            this.log("\n[SUCCESS] First Item Removed Successfully", chalk.green);
        }
        return true;
    };
    /**
     *  @function [removeFirst]
     *  @description: Remove the last node in the list
     **/
    DLL.prototype.removeLast = function () {
        if (this.getSize() > 0) {
            var current = this.head;
            var prev = void 0;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            this.tail = this.tail.prev;
            if (this.getSize() === 1) {
                this.head = null;
            }
            else {
                prev.next = null;
                current = null;
            }
            this.length--;
            this.log("\n[SUCCESS] Last Item Removed Successfully", chalk.green);
        }
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
                        break;
                    }
                    if (currentIndex === pos) {
                        prev.next = current.next;
                        current.next.prev = prev;
                        current = null;
                        break;
                    }
                    prev = current;
                    current = current.next;
                    currentIndex++;
                }
                this.length--;
                this.log("\n[SUCCESS]: Node at Position " + pos + " removed \n", chalk.green);
                return true;
            }
        }
        this.log("\n[ERROR][CODE=REMOVAL]: No node at position " + pos + "\n", chalk.red);
        return false;
    };
    /**
     *  @function [getAtPosition]
     *  @argument positionIndex
     *  @description: Get the value of a node at a specific index
     *  @returns number
     **/
    DLL.prototype.getAtPosition = function (pos) {
        var current = this.head;
        var currentIndex = 1;
        if (pos <= this.getSize() && pos !== 0) {
            while (currentIndex++ !== pos) {
                current = current.next;
            }
            this.log("\n[SUCCESS] Item at Position " + pos + ": " + current.value, chalk.green);
            return current.value;
        }
        this.log("\n[ERROR][CODE=GET]: No node at position " + pos + "\n", chalk.red);
    };
    /**
     *  @function [print]
     *  @description: Prints the list in order
     **/
    DLL.prototype.print = function () {
        this.log("\nDisplaying Current List Forwards", chalk.blue);
        this.log("-----------------------------", chalk.blue);
        if (this.isEmpty()) {
            this.log("List is Empty", chalk.blue);
        }
        var current = this.head;
        while (current !== null) {
            if (current.next === null) {
                process.stdout.write("[" + current.value + "]\n\n");
            }
            else {
                process.stdout.write("[" + current.value + "] => ");
            }
            current = current.next;
        }
    };
    /**
     *  @function [printReverse]
     *  @description: Prints the list in reverse order
     **/
    DLL.prototype.printReverse = function () {
        this.log("\nDisplaying Current List Backwards", chalk.blue);
        this.log("-----------------------------", chalk.blue);
        if (this.isEmpty()) {
            this.log("List is Empty", chalk.blue);
        }
        var current = this.tail;
        while (current !== null) {
            if (current.prev === null) {
                process.stdout.write("[" + current.value + "]\n\n");
            }
            else {
                process.stdout.write("[" + current.value + "] => ");
            }
            current = current.prev;
        }
    };
    return DLL;
}());
var linkedlist = new DLL();
linkedlist.prepend(10);
linkedlist.prepend(5);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.getAtPosition(2);
linkedlist.print();
linkedlist.printReverse();
// linkedlist.remove(10);
// linkedlist.remove(40);
linkedlist.removeAtPosition(4);
linkedlist.print();
linkedlist.printReverse();
