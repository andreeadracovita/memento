import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

export default function List() {
	const [toggle, setToggle] = useState(false);
	const sll = `// Singly linked list
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// Add element at the end of the list
	append(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	// Add element at the front of the list
	prepend(data) {
		const newNode = new Node(Data);
		newNode.next = this.head;
		this.head = newNode;
	}

	// Delete
	delete(data) {
		if (!this.head) return;
		if (this.head.data === data) {
			this.head = this.head.next; // Qualifies for garbage collection
			return;
		}
		let current = this.head;
		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next; // The node with data is no longer directly referenced.
				return;
			}
			current = current.next;
		}
	}

	print() {
		let current = this.head;
		const elements = [];
		while (current) {
			elements.push(current.data);
			current = current.next;
		}
		console.log(elements.join(' -> '));
	}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print();  // 5 -> 10 -> 20`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Linked List"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Add/delete at position: O(1)</li>
						<li>Search: O(n)</li>
					</ul>
					<SyntaxHighlighter language="javascript">{sll}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}