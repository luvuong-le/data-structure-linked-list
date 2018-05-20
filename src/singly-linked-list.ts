import { Node } from './Node';

class SLL {
  private head;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0 ? true : false;
  }

  getSize(): number {
    return this.length;
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
  }

  /**
   *  @function createNode
   *  @description: Create node and append to end of list
   **/
  append(value: number) {
    // Create a new node
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
      return true;
    }
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
  }

  /**
   *  @function [getAtPosition]
   *  @argument positionIndex
   *  @description: Get the value of a node at a specific index
   **/
  getAtPosition(pos: number): boolean {
    if (pos <= this.getSize()) {
      let current = this.head;
      let currentIndex = 1;

      while (currentIndex++ !== pos) {
        current = current.next;
      }
      console.log(`Position at: ${pos} is ${current.value}`);
      return true;
    }
    return false;
  }

  print() {
    console.log("Printing Linked List");
    let current = this.head;

    while (current !== null) {
      if (current.next === null) {
        process.stdout.write(`[${current.value}]\n`);
      } else {
        process.stdout.write(`[${current.value}] => `);
      }
      current = current.next;
    }
  }
}

const linkedlist = new SLL();

linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.prepend(5);
linkedlist.remove(1);
linkedlist.print();
linkedlist.removeAtPosition(1);
linkedlist.removeAtPosition(2);
linkedlist.print();