import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class myQueue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	enqueue(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		this.tail.next = newNode;
		this.tail = newNode;
	}

	dequeue() {
		if (!this.head) {
			console.log("Queue is empty");
			return;
		}
		const temp = this.head.data;
		this.head = this.head.next; // prev head is no longer referenced. Up for garbage collection.
		return temp;
	}

	getFront() {
		return this.head?.data;
	}

	getTail() {
		return this.tail?.data;
	}

	isEmpty() {
		return this.head === null;
	}
}

export default function Queue() {
	const [toggle, setToggle] = useState(false);

	const code = `class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class myQueue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	enqueue(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		this.tail.next = newNode;
		this.tail = newNode;
	}

	dequeue() {
		if (!this.head) {
			console.log("Queue is empty");
			return;
		}
		const temp = this.head.data;
		this.head = this.head.next; // prev head is no longer referenced (GC)
		return temp;
	}

	getFront() {
		return this.head?.data;
	}

	getTail() {
		return this.tail?.data;
	}

	isEmpty() {
		return this.head === null;
	}
}

const queueTest = new myQueue();
queueTest.enqueue(1);
queueTest.enqueue(2);
queueTest.enqueue(3);
console.log(queueTest.getFront());
console.log(queueTest.getTail());
console.log("Is empty?", queueTest.isEmpty());
queueTest.dequeue();
queueTest.dequeue();
queueTest.dequeue();
console.log("Is empty?", queueTest.isEmpty());`;

	return (
		<div id="queue" className="grey-card">
			<CardHeader
				title={"Queue"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>JavaScript does not have a built-in queue data structure in its standard library.</li>
						<li>However, queues can be implemented using arrays by utilizing the push() method to add elements to the end (enqueue) and the shift() method to remove elements from the front (dequeue).</li>
						<li>This approach simulates the First In, First Out (FIFO) behavior of a queue, where the first element added is the first one to be removed.</li>
						<li>While this array-based implementation is simple, it can be inefficient for large datasets or frequent operations due to the need to shift all elements when using shift().</li>
						<li>For better performance, especially with larger queues, dedicated queue implementations or other data structures like objects with head and tail pointers are recommended.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}