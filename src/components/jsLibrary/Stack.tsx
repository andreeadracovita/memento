import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Stack() {
	const [toggle, setToggle] = useState(false);
	const codeArray = `class myStack {

    // constructor
    constructor(cap) {
        
        // array to store elements
        this.arr = new Array(cap);
        
        // maximum size of stack
        this.capacity = cap;
        
        // index of top element
        this.top = -1;
    }
}`;
	const codeList = `/* Node structure */
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

/* Stack class */
class myStack {
    
    // pointer to top node
    top = null;

    constructor() {
        // initially stack is empty
    }
}`;

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
					<p>JavaScript does not have a built-in stack data structure as a distinct type, but it provides the necessary tools to implement one effectively using arrays.</p>
					<p>The Array object in JavaScript includes methods like push() and pop(), which correspond directly to the fundamental operations of a stack: adding an element to the top (push) and removing the top element (pop).</p>
					<p>This allows developers to use an array to simulate a stack, adhering to the Last-In, First-Out (LIFO) principle where the last element added is the first one removed.</p>
					<p className="card-section">Implementing Stack as Array</p>
					<pre>{codeArray}</pre>

					<p className="card-section">Implementing Stack as Linked List</p>
					<pre>{codeList}</pre>
				</>
			}
		</div>
	);
}