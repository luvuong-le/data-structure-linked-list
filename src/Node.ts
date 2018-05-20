export class Node {
    private value: number;
    private next: object;
    private prev: object;

    constructor(value: number, nextNode?: object, prevNode?: object) {
        this.value = value;
        this.next = nextNode || null;
        this.prev = prevNode;
    }
}