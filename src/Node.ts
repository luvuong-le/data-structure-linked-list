export class Node {
    private value: number;
    private next: Node;
    private prev: Node;

    constructor(value: number, nextNode?: Node, prevNode?: Node) {
        this.value = value;
        this.next = nextNode || null;
        this.prev = prevNode || null;
    }

    setPrevious(node: Node) {
        this.prev = node;
    }

    setNext(node: Node) {
        this.next = node;
    }
}
