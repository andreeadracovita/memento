import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

class myStack {
	constructor(cap) {
		this.arr = new Array();
		this.capacity = cap;  // optional
		this.top = -1;
	}

	push(data) {
		if (this.top === this.capacity - 1) {
			console.log("Stack is full already");
			return;
		}
		this.arr.push(data);
		this.top++;
	}

	pop() {
		if (!this.empty()) {
			const top = this.arr.pop();
			this.top--;
			return top;
		}
	}

	peek() {
		if (!this.empty()) {
			return this.arr[this.top];
		}
		console.log("Stack is empty");
	}

	isEmpty() {
		if (this.top === -1) {
			return true;
		}
		return false;
	}

	clear() {
		while (!this.empty()) {
			this.arr.pop();
			this.top--;
		}
	}
}

export default function Stack() {
	const [toggle, setToggle] = useState(false);
	const code = `class myStack {
	constructor(cap) {
		this.arr = new Array();
		this.capacity = cap;  // optional
		this.top = -1;
	}

	push(data) {
		if (this.top === this.capacity - 1) {
			console.log("Stack is full already");
			return;
		}
		this.arr.push(data);
		this.top++;
	}

	pop() {
		if (!this.empty()) {
			const top = this.arr.pop();
			this.top--;
			return top;
		}
	}

	peek() {
		if (!this.empty()) {
			return this.arr[this.top];
		}
		console.log("Stack is empty");
	}

	isEmpty() {
		if (this.top === -1) {
			return true;
		}
		return false;
	}

	clear() {
		while (!this.empty()) {
			this.arr.pop();
			this.top--;
		}
	}
}

const stackTest = new myStack(3);
stackTest.push(1);
console.log(stackTest.peek()); // 1
stackTest.push(2);
stackTest.push(3);
stackTest.push(4);
console.log(stackTest.peek()); // 3
stackTest.pop();
console.log(stackTest.peek()); // 2
console.log("Is empty?", stackTest.isEmpty()); // false
stackTest.clear();
console.log("Is empty?", stackTest.isEmpty()); // true`;

	return (
		<div id="stack" className="grey-card">
			<CardHeader
				title={"Stack"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>JavaScript does not have a built-in stack data structure as a distinct type, but it provides the necessary tools to implement one effectively using arrays.</li>
						<li>The Array object in JavaScript includes methods like push() and pop(), which correspond directly to the fundamental operations of a stack: adding an element to the top (push) and removing the top element (pop).</li>
						<li>This allows developers to use an array to simulate a stack, adhering to the Last-In, First-Out (LIFO) principle where the last element added is the first one removed.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}