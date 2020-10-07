import IDoublyLinkedList from '@interfaces/IDoublyLinkedList';
import Node from '@modules/Node';
import chalk from "chalk";

export default class DoublyLinkedList implements IDoublyLinkedList {
    private head;
    private tail;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
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
        return this.length;
    }

    log(message, color) {
        console.log(color(message));
    }

    /**
     * @function [contains]
     * @argument value
     * @description Check if doubly linked list contains a value
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
     * @description: Append a new node to beginning of list
     */

    prepend(value: number) {
        const node = new Node(value, this.head, null);
        if (this.head !== null) {
            // Set the previous of the current head to the new node
            this.head.prev = node;
            // Set the head equal to the new node
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        this.log(
            `\n[SUCCESS] Node with value [${value}] prepended successfully`,
            chalk.green
        );
    }

    /**
     *  @function [append]
     *  @description: Create node and append to end of list
     **/
    append(value: number) {
        const node = new Node(value);

        if (this.tail !== null) {
            this.tail.next = node;
        }
        this.tail = node;

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            let prev;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            node.setPrevious(prev);
        }
        this.log(
            `\n[SUCCESS] Node with value [${value}] appended successfully`,
            chalk.green
        );

        this.length++;
    }

    /**
     *  @function [removeFirst]
     *  @description: Remove the current node and set to the nextNode                   in the list
     *  @return boolean
     **/
    removeFirst() {
        if (this.getSize() > 0) {
            if (this.getSize() === 1) {
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head;
                let nextNode = current.next;
                current.next.prev = null;
                current = null;
                this.head = nextNode;
            }
            this.length--;
            this.log(
                `\n[SUCCESS] First Item Removed Successfully`,
                chalk.green
            );
        }
        return true;
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
            this.tail = this.tail.prev;

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
        let prev;

        if (this.contains(value)) {
            // If the current head value is equal to the value to remove
            if (current.value === value) {
                prev = current.next;
                current = null;
                this.head = prev;
                if (this.head !== null) {
                    this.head.prev = null;
                }
                this.length--;
                return true;
            } else {
                while (current !== null) {
                    if (current.value === value) {
                        if (current.next !== null) {
                            prev.next = current.next;
                            current.next.prev = prev;
                            current.next = null;
                            this.length--;
                        } else {
                            prev.next = null;
                            current.next = null;
                            this.tail = prev;
                            this.length--;
                        }
                    }
                    prev = current;
                    current = current.next;
                }
                this.log(
                    `\n[SUCCESS] [${value}] Removed Successfully`,
                    chalk.green
                );
                return true;
            }
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
        if (pos <= this.getSize() && pos > 0) {
            let current = this.head;
            let currentIndex = 1;
            let prev;

            if (pos === 1) {
                prev = current.next;
                current = null;
                this.head = prev;
                if (this.head !== null) {
                    this.head.prev = null;
                }
                this.length--;
                return true;
            } else {
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
                this.log(
                    `\n[SUCCESS]: Node at Position ${pos} removed \n`,
                    chalk.green
                );
                return true;
            }
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
     *  @returns number
     **/
    getAtPosition(pos: number): number {
        let current = this.head;
        let currentIndex = 1;

        if (pos <= this.getSize() && pos !== 0) {
            while (currentIndex++ !== pos) {
                current = current.next;
            }

            this.log(
                `\n[SUCCESS] Item at Position ${pos}: ${current.value}`,
                chalk.green
            );
            return current.value;
        }
        this.log(
            `\n[ERROR][CODE=GET]: No node at position ${pos}\n`,
            chalk.red
        );
    }

    reverse() {
        if (this.isEmpty()) {
            this.log('\nList is Empty!', chalk.red);
            this.log('-------------------------', chalk.red);
        } else {
            // Change the head = tail and tail = head
            let currentHead = this.head;
            this.head = this.tail;
            this.tail = currentHead;

            // Create a variable to keep track of head node
            let current = this.head;

            // Loop and swap each nodes prev and next
            while (current !== null) {
                let prev = current.prev;

                current.prev = current.next;
                current.next = prev;

                current = current.next;
            }

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
        this.log('\nDisplaying Current List Forwards', chalk.blue);
        this.log('-----------------------------', chalk.blue);
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

    /**
     *  @function [printReverse]
     *  @description: Prints the list in reverse order
     **/
    printReverse() {
        this.log('\nDisplaying Current List Backwards', chalk.blue);
        this.log('-----------------------------', chalk.blue);
        if (this.isEmpty()) {
            this.log('List is Empty', chalk.blue);
        }
        let current = this.tail;

        while (current !== null) {
            if (current.prev === null) {
                process.stdout.write(`[${current.value}]\n\n`);
            } else {
                process.stdout.write(`[${current.value}] => `);
            }
            current = current.prev;
        }
    }
}
