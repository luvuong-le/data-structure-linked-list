"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var util = require("util");
var chalk = require('chalk');
var SLL = /** @class */ (function () {
    function SLL() {
        this.head = null;
        this.length = 0;
    }
    /**
     * @function [isEmpty]
     * @description Check if linked list length is 0 or not
     * @returns boolean
     */
    SLL.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };
    /**
     * @function [getSize]
     * @description Return the size of the list
     * @returns number
     */
    SLL.prototype.getSize = function () {
        return (this.length > 0) ? this.length : 0;
    };
    SLL.prototype.log = function (message, color) {
        console.log(color(message));
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
        this.log("\n[SUCCESS] Node with value [" + value + "] prepended successfully", chalk.green);
    };
    /**
     *  @function [createNode]
     *  @description: Create node and append to end of list
     **/
    SLL.prototype.append = function (value) {
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
        this.log("\n[SUCCESS] Node with value [" + value + "] appended successfully", chalk.green);
    };
    /**
     *  @function [removeFirst]
     *  @description: Remove the current node and set to the nextNode                   in the list
     **/
    SLL.prototype.removeFirst = function () {
        if (this.getSize() > 0) {
            var current = this.head;
            var nextNode = current.next;
            current = null;
            this.head = nextNode;
            this.length--;
            this.log("\n[SUCCESS] First Item Removed Successfully", chalk.green);
        }
    };
    /**
     *  @function [removeFirst]
     *  @description: Remove the last node in the list
     **/
    SLL.prototype.removeLast = function () {
        if (this.getSize() > 0) {
            var current = this.head;
            var prev = void 0;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
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
            this.log("\n[SUCCESS] [" + value + "] Removed Successfully", chalk.green);
            return true;
        }
        this.log("\n[ERROR] No Such Value", chalk.red);
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
                this.log("\n[SUCCESS]: Node at pos " + pos + " removed\n", chalk.green);
                return true;
            }
            // Set the 'previous' variable equal to next of the current head
            // Remove the current head and reset the head to the node stored in the 'previous'
            prev = current.next;
            current = null;
            this.head = prev;
            this.length--;
            return true;
        }
        this.log("\n[ERROR][CODE=REMOVAL]: No node at position " + pos + "\n", chalk.red);
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
            this.log("\n[SUCCESS] Item at Position " + pos + ": " + current.value, chalk.green);
            return current.value;
        }
    };
    SLL.prototype.reverse = function () {
        if (this.isEmpty()) {
            this.log('\nList is Empty!', chalk.red);
            this.log('-------------------------', chalk.red);
        }
        else {
            var current = this.head;
            var prev = null;
            var next = null;
            // Loop through list 
            while (current !== null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
            this.log('\nSuccessfully Reversed List', chalk.green);
            this.log('-------------------------', chalk.green);
        }
        return this;
    };
    /**
     *  @function [print]
     *  @description: Prints the list in order
     **/
    SLL.prototype.print = function () {
        this.log("\nDisplaying Current List", chalk.blue);
        this.log("-------------------------", chalk.blue);
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
    return SLL;
}());
exports.SLL = SLL;
