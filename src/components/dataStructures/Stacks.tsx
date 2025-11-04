import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Stacks() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Stacks"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A stack is a linear data structure that follows a particular order in which the operations are performed - LIFO (Last In First Out). Main operations: push, pop. Can be implemented with array, linked lists or deque (double-ended queue).</p>
					<img src="graphics/stack.png" className="graphics" />
					<br />
					<p>
						<a href="/memento/js-library#stack">Stack implementation in JavaScript</a>
					</p>
					<p>
						<a href="/memento/java#stack">Stack implementation in Java</a>
					</p>
				</>
			}
		</div>
	);
}