import Node from "@modules/Node";

export default interface INode {
    value: number;
    next: Node;
    prev: Node;
}
