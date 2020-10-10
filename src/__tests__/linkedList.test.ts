import SinglyLinkedList from '@modules/SinglyLinkedList';
import DoublyLinkedList from '@modules/DoublyLinkedList';

let doublyLinkedList, singlyLinkedList = null;

beforeAll((done) => {
    singlyLinkedList = new SinglyLinkedList();
    doublyLinkedList = new DoublyLinkedList();
    done();
});

describe("Doubly Linked List", () => {
    it("should create a new doubly linked list", () => {
        expect(doublyLinkedList instanceof DoublyLinkedList).toBe(true);
    });
});

describe("Singly Linked List", () => {
    it("should create a new singly linked list", () => {
        expect(singlyLinkedList instanceof SinglyLinkedList).toBe(true);
    });
});