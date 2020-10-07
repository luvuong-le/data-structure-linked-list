import INode from "@interfaces/INode";

export default class Node implements INode {
    value: number;
    next: Node;
    prev: Node;

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
