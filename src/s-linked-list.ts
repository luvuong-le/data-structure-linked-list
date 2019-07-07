import { Node } from './Node';

const util = require('util');
const chalk = require('chalk');

export class SLL {
    private head;
    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * @function [isEmpty]
     * @description Check if linked list length is 0 or not
     * @returns boolean
     */
    isEmpty(): boolean {
        return this.length === 0 ? true : false;
    }

    /**
     * @function [getSize]
     * @description Return the size of the list
     * @returns number
     */
    getSize(): number {
        return this.length > 0 ? this.length : 0;
    }

    log(message, color) {
        console.log(color(message));
    }

    /**
     * @function [contains]
     * @argument value
     * @description Check if linked list contains a value
     * @returns boolean
     */
    contains(value: number): boolean {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * @function [prepend]
     * @argument number
     * @description: Append a new node to beginning of list
     */
    prepend(value: number) {
        const node = new Node(value, this.head);
        this.head = node;
        this.length++;
        this.log(
            `\n[SUCCESS] Node with value [${value}] prepended successfully`,
            chalk.green
        );
    }

    /**
     *  @function [createNode]
     *  @description: Create node and append to end of list
     **/
    append(value: number) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
        this.log(
            `\n[SUCCESS] Node with value [${value}] appended successfully`,
            chalk.green
        );
    }

    /**
     *  @function [removeFirst]
     *  @description: Remove the current node and set to the nextNode                   in the list
     **/
    removeFirst() {
        if (this.getSize() > 0) {
            let current = this.head;
            let nextNode = current.next;
            current = null;
            this.head = nextNode;
            this.length--;
            this.log(
                `\n[SUCCESS] First Item Removed Successfully`,
                chalk.green
            );
        }
    }

    /**
     *  @function [removeFirst]
     *  @description: Remove the last node in the list
     **/
    removeLast() {
        if (this.getSize() > 0) {
            let current = this.head;
            let prev;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            if (this.getSize() === 1) {
                this.head = null;
            } else {
                prev.next = null;
                current = null;
            }
            this.length--;
            this.log(`\n[SUCCESS] Last Item Removed Successfully`, chalk.green);
        }
    }

    /**
     *  @function [remove]
     *  @argument number
     *  @description: Remove a node with a specific number
     **/
    remove(value: number): boolean {
        let current = this.head;
        let prevNode;

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
            this.log(
                `\n[SUCCESS] [${value}] Removed Successfully`,
                chalk.green
            );
            return true;
        }
        this.log(`\n[ERROR] No Such Value`, chalk.red);
        return false;
    }

    /**
     *  @function [removeAtPosition]
     *  @argument positionIndex
     *  @description: Remove a node at a specific index
     **/
    removeAtPosition(pos: number): boolean {
        if (pos <= this.getSize() && pos !== 0) {
            let current = this.head;
            let currentIndex = 1;
            let prev;
            if (pos !== 1) {
                while (currentIndex++ !== pos) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
                current.next = null;
                this.length--;
                this.log(
                    `\n[SUCCESS]: Node at pos ${pos} removed\n`,
                    chalk.green
                );
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
        this.log(
            `\n[ERROR][CODE=REMOVAL]: No node at position ${pos}\n`,
            chalk.red
        );
        return false;
    }

    /**
     *  @function [getAtPosition]
     *  @argument positionIndex
     *  @description: Get the value of a node at a specific index
     **/
    getAtPosition(pos: number): number {
        if (pos <= this.getSize()) {
            let current = this.head;
            let currentIndex = 1;

            while (currentIndex++ !== pos) {
                current = current.next;
            }
            this.log(
                `\n[SUCCESS] Item at Position ${pos}: ${current.value}`,
                chalk.green
            );
            return current.value;
        }
    }

    reverse() {
        if (this.isEmpty()) {
            this.log('\nList is Empty!', chalk.red);
            this.log('-------------------------', chalk.red);
        } else {
            let current = this.head;
            let prev = null;
            let next = null;
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
    }

    /**
     *  @function [print]
     *  @description: Prints the list in order
     **/
    print() {
        this.log('\nDisplaying Current List', chalk.blue);
        this.log('-------------------------', chalk.blue);
        if (this.isEmpty()) {
            this.log('List is Empty', chalk.blue);
        }
        let current = this.head;
        while (current !== null) {
            if (current.next === null) {
                process.stdout.write(`[${current.value}]\n\n`);
            } else {
                process.stdout.write(`[${current.value}] => `);
            }
            current = current.next;
        }
    }
}
