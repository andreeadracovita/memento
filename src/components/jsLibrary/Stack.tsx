import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Stack() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
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
				</>
			}
		</div>
	);
}